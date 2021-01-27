export interface CardPaymentFormat {
    id: number;
    creditCardNumber: string;
    cardHolder: string;
    expirationDate: string;
    securityCode: string;
    amount: number;
}
