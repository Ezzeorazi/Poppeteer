import puppeteer from "puppeteer";

(async () => {
  try {
    console.log("Abriendo el navegador...");
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    // Ir directamente a la URL especificada
    console.log("Accediendo a la URL...");
    await page.goto("https://goldenhorses.com.ar/quienessomos.html");

    // Extraer el contenido del div con el ID 'main'
    const mainContent = await page.evaluate(() => {
      const mainDiv = document.querySelector("#main");
      return mainDiv ? mainDiv.innerHTML : null; // Devuelve el HTML interno o null si el div no existe
    });

    console.log(mainContent); // Mostrar el contenido en la consola

    await browser.close();
  } catch (error) {
    console.log("Error al ejecutar el script: ", error);
    return;
  }
})();
