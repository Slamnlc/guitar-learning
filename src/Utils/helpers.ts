
export function openInNewTab(url: string) {
    window.open(url, '_blank', 'noopener,noreferrer');
}

export function getRandomValueFromArray(array: any[] | RegExpMatchArray) {
    return array[Math.floor(Math.random() * array.length)];
}
