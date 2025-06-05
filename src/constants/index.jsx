import eestilipp from "../assets/profile-pictures/eestilipp.png"

export const navItems = [
  { label: "Transport", href: "#" },
  { label: "Firmast", href: "#" },
  { label: "Hinnapäring", href: "#" },
  { label: "Kontakt", href: "#" },
  { label: (
    <img src={eestilipp}
    alt="Eesti lipp"
    className="w-6 h-4"
    />
  )},
];
