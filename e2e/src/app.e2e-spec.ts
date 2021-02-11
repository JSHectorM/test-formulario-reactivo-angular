import { ReactivePage } from './app.po';
import { browser, logging } from 'protractor';
import { protractor } from 'protractor/built/ptor';

const origFn = browser.driver.controlFlow().execute;
// esta función pone un retrazo de tiempo entre cada paso del controlFlow de protractor
browser.driver.controlFlow().execute = function stop() {
  const args = arguments;

  origFn.call(browser.driver.controlFlow(), () => {
    return protractor.promise.delayed(0); // tiempo de retraso entre cada paso
  });

  return origFn.apply(browser.driver.controlFlow(), args);
};
// puede correr la prueba con el comando ng e2e en la carpeta del proyecto, si necesita cambiar el puerto escriba ademas --port=PORTNUMBER
describe('Casos de ejemplo', () => { // Engloba todas las pruebas (it) de un caso de uso a probar
  let page: ReactivePage;

  beforeEach(() => { // Este método se ejecuta antes de cada prueba
    page = new ReactivePage(); // crea un objeto de la página reactive forms
  });

  // si ponemos xit o xdescribe jasmine ignorara la prueba o el conjunto de pruebas
  it('Debe poder ir a la pagina de reactive forms', () => { // primera prueba de ejemplo
    page.navigateToReactivePage();
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + 'reactive'); // comprobamos que carge la página
  });

  it('Debe mostrar el título de la página', async () => {
    page.navigateToReactivePage();
    const title = await page.getTitleText();
    await console.log(title); // podemos imprimir el texto en consola para debuggin
    expect(title).toEqual('Formularios Reactivos'); // comprobamos que el titulo renderizado sea el que esperamos
  });

  it('Debe escribir Jorge en el campo nombre', async () => { // en este ejemplo podemos quitar el método waitForAngular y los await
    page.navigateToReactivePage();                           // pero los dejo por que me parece mas ilustrativo para futuras prácticas
    await browser.waitForAngular(); // espera que angular este estable (termine de cargar la página)
    await page.setName('Jorge');
    expect(page.getName()).toEqual('Jorge'); // comprobamos que el input tenga el valor que le acabamos de escribir
  });

  it('Debe mostrar un error en el campo apellido si presionamos guardar', () => {
    page.navigateToReactivePage();
    page.clickSaveButton();
    expect(page.getTextOfEspecificError(0)).toEqual('Apellido obligatorio :O'); // esperamos que aparezca el error
  });

  it('Debe mostrar un error si el campo nombre tiene menos 4 letras', () => {
    page.navigateToReactivePage();
    page.setName('Jorg');
    page.clickSaveButton();
    expect(page.getTextOfEspecificError(0)).toEqual('Ingresa al menos 5 letras :)'); // esperamos que aparezca el error
  });

  it('Debe agregar un elemento a la tabla hobbies si presionamos Agregar', async () => {
    page.navigateToReactivePage();
    await page.clickAddButton();
    expect(page.deleteHobbieButtonIsPresent()).toBeTruthy(); // esperamos que el botón este presente en la página
  });


  /////////////////////////////////////////////////////
  
  it('Al precionar el boton de guardar limpiara todos los campos', async ( ) => {
    page.navigateToReactivePage();
    page.setName('Miguel');
    page.setLastName('Jimenez');
    page.setEmail('correo@correo.com');
    page.setUser('UserDemo12');
    page.setPsw('asdfg123');
    page.setRpsw('asdfg123');
    page.setState('Edo Mex');
    page.setcity('Toluca');

    await page.clickSaveButton();

    expect(page.getName()).toEqual('');
    expect(page.getLastName()).toEqual('');
    expect(page.getEmail()).toEqual('');
    expect(page.getUser()).toEqual('');
    expect(page.getPsw()).toEqual('');
    expect(page.getRpsw()).toEqual('');
    expect(page.getState()).toEqual('');
    expect(page.getcity()).toEqual('');
    
  });


  /////////////////////////////////////////////)


  it('Debe de verificar que el boton de borrar hobbie funciona', async ( ) => {
    page.navigateToReactivePage();
    page.clickAddButton();
    await (page.clickDeleteButton());
    expect (page.deleteHobbieButtonIsPresent()).toBe(false);
  });


  ////////////////////////////////////////////////////////////

  it('Verificar que marque error el correo con una arreglo', async () => {
    const email = ['jorge', 'jorge@' , 'jorge@ho'];
    email.forEach(element => {
      page.setEmail(element);
      expect(page.getTextOfEspecificError(0)).toEqual('Correo obligatorio ;)');
    });
    
  });

  // 5. Probar la selección de un checkbox, para ello, seleccionar Cuba del checkbox Pais,
  // sugerencia utilice la instruccion cssContainingText
  

  afterEach(async () => { // Este método se ejecuta despues de cada prueba
    // Revisa si no hay errores severos emitidos por el navegador
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
