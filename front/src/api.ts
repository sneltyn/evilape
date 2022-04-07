class Api {
  async settingsAsync() {}
  async settingsSaveAsync() {}
  async settingsUpdateAsync() {}

  async walletAdd(walet: any) {}
  async walletDelete(id: number): Promise<boolean> {
    return true;
  }

  async tasks() {}
  async taskAdd(walet: any) {}
  async taskStart(ids: number[]) {}
  async taskStop(ids: number[]) {}
  async taskDelete(id: number): Promise<boolean> {
    return true;
  }
}

export default new Api();
