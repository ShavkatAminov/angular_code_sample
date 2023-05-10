export interface User
{
    firstName: string;
    lastName: string;
    middleName: string;
    languageId: string;
    type: string;
    positionId: number;
    refreshExpiresIn: number;
    expiresIn: number;
    status: string;
    accessToken: string;
    coatoCode: string;
    refreshToken: string;
    loggedIn: number;
}
