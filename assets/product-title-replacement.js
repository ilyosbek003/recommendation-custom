window.replaceWords = function(text) {
  const replacements = new Map([
    [/\b(Eco\s?Vero|Ecovero)(?!™)\b/g, 'EcoVero™'],
    [/\b(Super\s?Merino|super\s?merino)(?!™)\b/g, 'Super Merino™'],
    [/\bOoohCotton(?!®)\b/g, 'OoohCotton®']
  ]);

  for (const [regex, replacement] of replacements) {
    text = text.replace(regex, replacement);
  }
  return text;
};