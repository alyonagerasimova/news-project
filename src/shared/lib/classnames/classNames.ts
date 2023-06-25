type Mods = Record<string, string | boolean>;

export function classNames(cls: string, mods: Mods, additional: string[]): string {
    return [
        cls,
        ...additional,
        Object.entries(mods)
            .filter(([classnames, value]) => Boolean(value))
            .map(([classes]) => classes)
    ]
        .join(" ");
}