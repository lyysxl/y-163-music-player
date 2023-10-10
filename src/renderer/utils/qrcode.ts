import QRCode from 'qrcodejs2'

export type QRCodeRuturn = {
  clear(): void
  makeCode(text: string): void
}

export const getQRCode = (root: string | HTMLElement): QRCodeRuturn => {
  const qrcode = new QRCode(root, {
    text: 'https://music.163.com',
    width: 170,
    height: 170,
    colorDark: '#000000',
    colorLight: '#ffffff',
    correctLevel: QRCode.CorrectLevel.H
  })
  return qrcode
}
