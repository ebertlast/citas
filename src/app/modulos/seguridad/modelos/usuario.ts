export class Usuario {
  constructor(
    public usuario: string = '',
    public email: string = '',
    public clave: string = '',
    public activo: boolean = false,
    public token: string = ''
  ) { }
}
