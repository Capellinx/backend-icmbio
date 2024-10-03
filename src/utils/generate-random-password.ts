
export default function randomPassword(): string {
   return Math.random().toString(36).slice(-8)
}
