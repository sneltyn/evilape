import './Radio.scss';

export default function Radio ({children, ...otherProps}) {
    return (
        <label className="radiobutton">
                      <span className="radio__btn">
                        <div className="radio__name">{children}</div>
                        <input
                          type="radio"
                          {...otherProps}
                        />
                        <span></span>
                      </span>
                    </label>
    )
}