import { IsBoolean, IsDateString, IsEmail, IsNotEmpty, IsOptional, IsString, Length, Matches } from 'class-validator';
import { PickType } from '@nestjs/swagger';
  
export class UserDto {
/**
 * @example 'Homero Simpson'
 */
@IsNotEmpty({ message: 'El nombre es requerido' })
@IsString({ message: 'El nombre debe ser una cadena de texto' })
@Length(2, 50, {
    message: 'El nombre debe tener entre 2 y 50 caracteres',
})
fullName: string;

@IsNotEmpty({ message: 'El correo electrónico es requerido' })
@IsEmail({}, { message: 'El correo electrónico no es válido' })
email: string;

/**
 * @example 'Contraseña123'
 */
@IsOptional()
@Matches(/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/, {
    message:
    'La contraseña debe tener al menos 8 caracteres, una mayúscula y un número',
})
password: string;

/**
 * @example 'Av. Siempreviva 123 - Springfield, USA'
 */
@IsNotEmpty()
@IsString()
fullAddress: string;

/**
 * @example '12345678'
 */
@IsNotEmpty({ message: 'El número de teléfono es requerido' })
phone: string;

/**
 * @example '12345678'
 */
@IsNotEmpty({ message: 'El número de documento es requerido' })
dni: string;

@IsNotEmpty({ message: 'Debe indicar si es suscrito' })
@IsBoolean()
isSubscribed: boolean;

/**
 * @example '1999-01-01'
 */
@IsNotEmpty({ message: 'La fecha de nacimiento es requerida' })
@IsDateString({}, { message: 'Ingrese una fecha válida (AAAA-MM-DD)' })
birthDate: string;

@IsOptional()
role: string;
}

export class LoginUserDto extends PickType(UserDto, ['email', 'password']) {}

export class SignUpGoogle extends PickType(UserDto, [
'fullName',
'email',
'fullAddress',
'phone',
'dni',
'birthDate',
'isSubscribed',
]) {}

export class LoginGoogle extends PickType(UserDto, ['email']) {}
