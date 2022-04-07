import React, { useState } from "react";
import "./Settings.scss";
import Laoyut from "../../components/Layout/Layout";
import Field from "../../components/Field/Field";
import Select from "../../components/Select/Select";

import { useAppSelector, useAppDispatch } from "app/hooks";
import { selectSettings, updateField } from "slices/settingsSlice";

const Settings = React.memo((props) => {
  const dispatch = useAppDispatch();

  const glSettings = useAppSelector(selectSettings);
  const [settings, setState] = useState(glSettings);
  const [search, setSearch] = useState("");

  const metamask = [
    {
      value: "Metamask 2",
      label: "Metamask 2",
    },
    {
      value: "Metamask 3",
      label: "Metamask 3",
    },
    {
      value: "Metamask",
      label: "Metamask",
    },
  ];

  const handleChangeOption = (val, name) => {
    setState((prevState) => ({
      ...prevState,
      [name]: val,
    }));
  };

  const handleChange = (e, name) => {
    setState((prevState) => ({
      ...prevState,
      [name]: e.target.value,
    }));

    //dispatch(updateField({ name, value: e.target.value }));
  };

  return (
    <>
      <Laoyut page="Settings">
        <div className="settings">
          <div className="container">
            <div className="settings__inner">
              <div className="settings__info">
                <div className="settings__img">
                  <img src="assets/images/setting-img.svg" alt="" />
                </div>
                <div className="settings__text">
                  <p>Settings</p>
                  <span>Configure your bot setup</span>
                </div>
              </div>
              <form className="settings__items">
                <div className="settings__item">
                  <Field
                    label="RPC Url"
                    value={settings.rpcUrl}
                    onChange={(e) => handleChange(e, "rpcUrl")}
                  />
                  <div className="settings__name">
                    URL of ETH RPC of choice (Ex: Infura, Alchemy)
                  </div>
                  <div className="settings__buttons">
                    <button type="submit" className="settings__save">
                      Save
                    </button>
                    <button type="submit" className="settings__test">
                      Test
                    </button>
                  </div>
                </div>
                <div className="settings__item">
                  <Field
                    label="Discord Webhook"
                    value={settings.discordWebhook}
                    onChange={(e) => handleChange(e, "discordWebhook")}
                  />
                  <div className="settings__name">
                    Webhook for Aspide.io alerts
                  </div>
                  <div className="settings__buttons">
                    <button type="submit" className="settings__save">
                      Save
                    </button>
                  </div>
                </div>
                <div className="settings__item">
                  <div className="field__label">Flashbots Relay Endpoint</div>
                  <Select
                    // placeholder={
                    //   settings.flashbotSelected ?? settings.flashbotOptions[0]
                    // }
                    defaultValue={
                      settings.falashbotSelectId == -1
                        ? ""
                        : settings.flashbotOptions.filter(
                            (x) => x.value == settings.falashbotSelectId
                          )
                    }
                    onChange={(e) => handleChangeOption(e, "flashbotSelected")}
                    options={settings.flashbotOptions}
                  />
                  <div className="settings__name">
                    Which Flashbots endpoint to send Tx's to
                  </div>
                  <div className="settings__buttons">
                    <button type="submit" className="settings__save">
                      Save
                    </button>
                  </div>
                </div>
                <div className="settings__item">
                  <div className="field__label">Flashbots Priority Tester</div>
                  <Select placeholder="Metamask 2" options={metamask} />
                  <div className="settings__name">
                    Test to see if your wallet has Flashbots priority access
                  </div>
                  <div className="settings__buttons">
                    <button type="submit" className="settings__test">
                      Test
                    </button>
                    <div className="settings__description">
                      Wallet does have priority
                    </div>
                  </div>
                </div>
                <div className="settings__item settings__item--border">
                  <Field
                    label="Retry Delay"
                    value="2500"
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <div className="settings__name">
                    How long to wait between tries (in milliseconds)
                  </div>
                  <div className="settings__buttons">
                    <button type="submit" className="settings__save">
                      Save
                    </button>
                  </div>
                </div>
                <div className="settings__item settings__item--border"></div>
              </form>
            </div>
          </div>
        </div>
      </Laoyut>
    </>
  );
});

export default Settings;
