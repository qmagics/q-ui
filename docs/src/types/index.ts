export interface MenuItemRaw {
    type: "menu" | "group";
    label: string;
    icon?: string;
    path?: string;
    children?: MenuItemRaw[]
}