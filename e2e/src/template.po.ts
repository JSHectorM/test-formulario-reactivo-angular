import { browser, by, element, ElementArrayFinder, ElementFinder } from 'protractor';

export class TemplatePage {

  // 4. Crear 2 archivos uno para la clase formulario template y otro para el describe de las pruebas de esa página
  // (el archivo debe terminar con extención .e2e-spec.ts), recuerden hacer un método en la clase formulario template
  // que se dirija a dicha página del proyecto con la instrucción browser.get(browser.baseUrl + 'template')
  // realizar la prueba del ejercicio 3 para ese formulario

  // title: ElementFinder;
  // nameinput: ElementFinder;
  // saveButton: ElementFinder;
  // addButton: ElementFinder;
  // deleteButton: ElementArrayFinder;
  errorsText: ElementArrayFinder;

  // lastNameInput: ElementFinder;
  emailInput: ElementFinder;
  // userInput: ElementFinder;
  // pswInput: ElementFinder;
  // rPswInput: ElementFinder;
  // stateInput: ElementFinder;
  // cityInput: ElementFinder;
  // hobbiesInput: ElementArrayFinder;

  checkBox: ElementFinder;




  constructor() {
    // this.title = element(by.css('h4')); // obtenemos el elemento h4
    // this.nameinput = element(by.css('input[formControlName=nombre]')); // obtenemos en input por formControlName
    // this.saveButton = element(by.className('btn-outline-primary')); // obtenemos el elemento por el nombre de la clase
    // this.addButton = element(by.className('btn-success'));
    this.errorsText = element.all(by.css('.text-danger')); // obtenemos todos los elementos con la clase text-danger
    // this.deleteButton = element.all(by.className('btn-danger'));

    // this.lastNameInput =  element(by.css('input[formControlName=apellido]'));
    this.emailInput =  element(by.css('input[formControlName=correo]'));
    // this.userInput =  element(by.css('input[formControlName=usuario]'));
    // this.pswInput =  element(by.css('input[formControlName=pass1]'));
    // this.rPswInput =  element(by.css('input[formControlName=pass2]'));
    // this.stateInput =  element(by.css('input[formControlName=estado]'));
    // this.cityInput =  element(by.css('input[formControlName=municipio]'));
    // this.hobbiesInput =  element.all(by.css('input[formControlName=municipio]'));

   }


   navigateToReactivePage(): Promise<unknown> { // navega a la ruta /reactive
    return browser.get(browser.baseUrl + 'reactive') as Promise<unknown>;
  }

  // getTitleText(): Promise<string> { // obtiene el titulo de la página
  //   return this.title.getText() as Promise<string>;
  // }

  // setName(name: string): Promise<void>{ // escribe el el input name
  //   this.nameinput.clear();
  //   return this.nameinput.sendKeys(name) as Promise<void>;
  // }

  // getName(): Promise<string>{ // regresa el texto del input name
  //   return this.nameinput.getAttribute('value') as Promise<string>;
  // }

  // ////////////////////////////////////////////////////////////////////

  // setLastName(lastName: string): Promise<void>{
  //   this.lastNameInput.clear();
  //   return this.lastNameInput.sendKeys(lastName) as Promise<void>;
  // }

  // getLastName(): Promise<string>{ 
  //   return this.lastNameInput.getAttribute('value') as Promise<string>;
  // }

  setEmail(email: string): Promise<void>{
    this.emailInput.clear();
    return this.emailInput.sendKeys(email) as Promise<void>;
  }

  getEmail(): Promise<string>{ 
    return this.emailInput.getAttribute('value') as Promise<string>;
  }

  // setUser(user: string): Promise<void>{
  //   this.userInput.clear();
  //   return this.userInput.sendKeys(user) as Promise<void>;
  // }

  // getUser(): Promise<string>{ 
  //   return this.userInput.getAttribute('value') as Promise<string>;
  // }

  // setPsw(psw: string): Promise<void>{
  //   this.pswInput.clear();
  //   return this.pswInput.sendKeys(psw) as Promise<void>;
  // }

  // getPsw(): Promise<string>{ 
  //   return this.pswInput.getAttribute('value') as Promise<string>;
  // }

  // setRpsw(rPsw: string): Promise<void>{
  //   this.rPswInput.clear();
  //   return this.rPswInput.sendKeys(rPsw) as Promise<void>;
  // }

  // getRpsw(): Promise<string>{ 
  //   return this.rPswInput.getAttribute('value') as Promise<string>;
  // }

  // setState(state: string): Promise<void>{
  //   this.stateInput.clear();
  //   return this.stateInput.sendKeys(state) as Promise<void>;
  // }

  // getState(): Promise<string>{ 
  //   return this.stateInput.getAttribute('value') as Promise<string>;
  // }

  // setcity(city: string): Promise<void>{
  //   this.cityInput.clear();
  //   return this.cityInput.sendKeys(city) as Promise<void>;
  // }

  // getcity(): Promise<string>{ 
  //   return this.cityInput.getAttribute('value') as Promise<string>;
  // }


  // clickDeleteButton(): Promise<void>{
  //   return this.deleteButton.click() as Promise<void>;
  // }


  // /////////////////////////////////////////////////////////////////////

  // clickSaveButton(): Promise<void>{ // presiona el botón guardar
  //   return this.saveButton.click() as Promise<void>;
  // }

  // clickAddButton(): Promise<void>{ // presiona el botón añadir
  //   return this.addButton.click() as Promise<void>;
  // }

  // deleteHobbieButtonIsPresent(): Promise<boolean>{ // comprueba si el botón borrar existe
  //   this.addButton = element(by.className('btn-danger'));
  //   return this.addButton.isPresent() as Promise<boolean>;
  // }

  getTextOfEspecificError(indice: number): Promise<string>{ // obtiene el texto de un mensaje de error especifico
    return this.errorsText.get(indice).getText() as Promise<string>;
  }




  //////////////////////////////////////

  clickCheckBox(): Promise <void>{
    return this.checkBox.click() as Promise<void>;
  }

}