declare module 'mockjs' {

  namespace Random {

    namespace Random {

      // tslint:disable-next-line
      export function string (): string
      export function email (): string
      export function integer (min: number, max: number): number
      export function paragraph (): string
      export function float (): number

    }

  }

  // tslint:disable-next-line
  export = Random
}
