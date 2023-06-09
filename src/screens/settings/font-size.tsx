import { Slider } from '@miblanchard/react-native-slider'
import { useState } from 'react'
import styled, { useTheme } from 'styled-components/native'

import GlobalLayout from '#/components/GlobalLayout'
import { Heading } from '#/components/Header'
import useConfig from '#/hooks/useConfig'

export default function () {
  const { colors } = useTheme()
  const { config, setFontSize } = useConfig()

  return (
    <GlobalLayout paddings={{ horizontal: 8, top: 80 }}>
      <Heading title='Font size' />

      <Layout>
        <FontSizePreview>
          <FontSizePreviewText size={14 + config.fontSize}>{`
        The quick brown fox jumps
        over the lazy dog.
        
        @OpenAI
        #HelloWorld
        $123.45
        %Lorem ipsum
        &dolor sit amet!
        `}</FontSizePreviewText>
        </FontSizePreview>

        <SliderContainer>
          <FontSizePreviewText size={14}>A</FontSizePreviewText>
          <Slider
            animateTransitions
            trackClickable
            containerStyle={{ width: '85%' }}
            thumbStyle={{ backgroundColor: colors.primary }}
            trackStyle={{ backgroundColor: colors.vectors }}
            maximumTrackTintColor={colors.vectors}
            minimumTrackTintColor={colors.vectors}
            renderTrackMarkComponent={() => <TrackMark />}
            minimumValue={0}
            maximumValue={5}
            trackMarks={[0, 1, 2, 3, 4, 5]}
            step={1}
            value={config.fontSize}
            onValueChange={val => setFontSize(val[0])}
          />
          <FontSizePreviewText size={22}>A</FontSizePreviewText>
        </SliderContainer>
      </Layout>
    </GlobalLayout>
  )
}

const Layout = styled.View`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding-vertical: 20px;
`

const TrackMark = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #ccc;
`

const FontSizePreview = styled.View`
  width: 100%;
  height: 300px;
  border-radius: 12px;
  padding-horizontal: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.card};
`

const FontSizePreviewText = styled.Text<{ size: number }>`
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.size}px;
  font-weight: 600;
`

const SliderContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.card};
  border-radius: 12px;
  padding-horizontal: 20px;
  height: 80px;
  width: 100%;
`
