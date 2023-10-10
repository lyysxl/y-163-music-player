import reqest from '@/utils/request'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createQrCodeKey = (): Promise<any> => {
  return reqest.get('/login/qr/key')
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createQrCodeURL = (key: string): Promise<any> => {
  return reqest.get('/login/qr/create', {
    params: {
      key,
      qrimg: true
    }
  })
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const checkQrCodeStatus = (key: string): Promise<any> => {
  return reqest.get(`/login/qr/check`, {
    params: {
      key
    }
  })
}
