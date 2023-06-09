const darkenHexColor = (hexColor: string, amount: number) => {
  // Remove the '#' symbol from the hex color
  hexColor = hexColor.replace('#', '')

  // Parse the hex color to its RGB components
  const red = parseInt(hexColor.substr(0, 2), 16)
  const green = parseInt(hexColor.substr(2, 2), 16)
  const blue = parseInt(hexColor.substr(4, 2), 16)

  // Apply the darkening amount to each RGB component
  const darkenedRed = Math.max(0, red - amount)
  const darkenedGreen = Math.max(0, green - amount)
  const darkenedBlue = Math.max(0, blue - amount)

  // Convert the darkened RGB values back to hex
  const darkenedHex = (
    (darkenedRed << 16) +
    (darkenedGreen << 8) +
    darkenedBlue
  ).toString(16)

  // Pad the darkened hex color with leading zeros if necessary
  const paddedHex = darkenedHex.padStart(6, '0')

  // Prepend the '#' symbol to the darkened hex color
  const darkenedColor = `#${paddedHex}`

  return darkenedColor
}

export default darkenHexColor
