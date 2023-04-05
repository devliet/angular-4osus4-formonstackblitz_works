showConfig(){
  this.config.Service.getConfig()
    .subscribe((data: Config) => this.config = {
      heroesUrl : data.heroesUrl,
      textfile: data.textfile,
      data : data.date,
    })
}