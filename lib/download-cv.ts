
export const handleDescargarCV = () => {
  // Aquí especificamos la ruta del archivo PDF
  const pathCv = '/WilversCv.pdf';
  // Creamos un enlace temporal
  const downloadLink = document.createElement('a');
  downloadLink.href = pathCv;
  // Establecemos el atributo 'download' para que el navegador inicie la descarga en lugar de abrir el archivo
  downloadLink.download = 'WilversCv.pdf';
  // Simulamos un clic en el enlace para iniciar la descarga
  downloadLink.click();
};