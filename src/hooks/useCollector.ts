import { useState } from 'react'

export default <T extends Record<string, any>>(defaultValues: T) => {
  const [collection, setCollection] = useState(defaultValues)

  const handleChanges = ({ key, value }: { key: keyof T; value: string }) =>
    setCollection({
      ...collection,
      [key]: value
    })

  const submit = (callback: (values: T) => void) => () => {
    const aux: T = { ...collection }

    Object.keys(aux).forEach(key => {
      aux[key as keyof T] = aux[key as keyof T].trim()
    })

    setCollection(aux)
    callback(aux)
  }

  return {
    handleChanges,
    collection,
    submit
  }
}
