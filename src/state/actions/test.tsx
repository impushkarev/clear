import { TTest } from 'types/test'

export const initTest = (test: TTest[]) => ({
  type: 'INIT_TEST',
  test
})