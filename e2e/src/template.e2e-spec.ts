import { ReactivePage } from './app.po';
import { browser, logging } from 'protractor';
import { protractor } from 'protractor/built/ptor';
import { Template } from '@angular/compiler/src/render3/r3_ast';
import { TemplatePage } from './template.po';

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
describe('Casos de ejemplo DEL TEMPLATE', () => { // Engloba todas las pruebas (it) de un caso de uso a probar
  let page: TemplatePage;

  beforeEach(() => { // Este método se ejecuta antes de cada prueba
    page = new TemplatePage(); // crea un objeto de la página reactive forms
  });


  ////////////////////////////////////////////////////////////

  it('Verificar que marque error el correo con una arreglo', async () => {
    const email = ['jorge', 'jorge@' , 'jorge@ho'];
    email.forEach(element => {
      page.setEmail(element);
      expect(page.getTextOfEspecificError(0)).toEqual('Correo obligatorio ;)');
    });
    
  });


//////////////////////////////////////////////////////////////////////////////


  

  // 5. Probar la selección de un checkbox, para ello, seleccionar Cuba del checkbox Pais,
  // sugerencia utilice la instruccion cssContainingText

  // No hay ningun input de tipo checkbox o  una clase que sea llamada asi
  
  // 6. Finalmente pruebe retrasos de tiempo jugando con el tiempo en la instrucción protractor.promise.delayed(tiempo);

  // EJERCICIO SUGERIDO
  // Consulte las pruebas del tutorial en la página de protractor https://www.protractortest.org/#/tutorial
  // (si puede realice las pruebas del tutorial en un archivo de este proyecto ignorando las partes del archivo de configuración
  // porque este proyecto ya cuenta con las configuraciones necesarias)

  afterEach(async () => { // Este método se ejecuta despues de cada prueba
    // Revisa si no hay errores severos emitidos por el navegador
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
