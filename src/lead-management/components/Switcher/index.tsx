import colors from '@core/theme/colors'
import React from 'react'
import { Switch } from 'react-native'
import { Container, ItemContainer, ContentContainer } from './styles'
import Typography from '@lead-management/components/Typography'

interface SwitcherProps {
  isEnabled: boolean,
  valueTrue: string,
  valueFalse: string,
  onChangeFunc(): void,
  label: string,
}

const Switcher: React.FC<SwitcherProps> = ({ 
  isEnabled, 
  valueFalse, 
  valueTrue, 
  onChangeFunc,
  label
 }) => {
  return (
    <Container>
      <ContentContainer>
        <Typography
          color="#000"
          font="primaryRegular"
          size="xs"
          text={label}
          key={valueTrue}
        />
      </ContentContainer>
      <ContentContainer>
        <ItemContainer>
          <Switch
            trackColor={{
              false: "#767577",
              true: "#b9b9b9"
            }}
            thumbColor={isEnabled ? colors.imobcasaPrimary : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={onChangeFunc}
            value={isEnabled}
          />
        </ItemContainer>
        <ItemContainer>
          <Typography
            color="#000"
            font="primaryRegular"
            size="s"
            text={isEnabled ? valueTrue : valueFalse}
            key={valueTrue}
          />
        </ItemContainer>
      </ContentContainer>

    </Container>

  )
}

export default Switcher