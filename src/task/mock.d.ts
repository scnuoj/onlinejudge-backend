declare module 'mockjs' {

  namespace Random {

    namespace Random {

      export function string (): string
      export function email (): string
      export function integer (min: number, max: number): number
      export function paragraph (): string
      export function float (): number

    }

  }

  export = Random;
}
