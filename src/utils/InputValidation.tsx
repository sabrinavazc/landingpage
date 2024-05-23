export function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
  
export function isValidPhone(phone: string): boolean {
    const phoneRegex = /^[0-9]*$/;
    return phoneRegex.test(phone);
}