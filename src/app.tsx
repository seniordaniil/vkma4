import React, { FC } from 'react';
import {
  View,
  Panel,
  useAdaptivity,
  AppRoot,
  SplitLayout,
  SplitCol,
  ViewWidth,
  PanelHeader,
  Gradient,
  Div,
  Title,
  SimpleCell,
  Avatar,
  Group,
  Footer,
  Text,
} from '@vkontakte/vkui';
import VKLogo from 'ui/vk-logo';
import styled from 'styled-components';

const Card = styled(Gradient)`
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const App: FC = () => {
  const { viewWidth } = useAdaptivity();

  return (
    <AppRoot>
      <SplitLayout header={<PanelHeader separator={false} />}>
        <SplitCol spaced={Number(viewWidth) > ViewWidth.MOBILE}>
          <View activePanel={'main'}>
            <Panel id={'main'}>
              <PanelHeader
                separator
                left={
                  <Div>
                    <VKLogo />
                  </Div>
                }
              />
              <Card>
                <Title weight={'bold'} level={'1'}>
                  Red Bool
                </Title>
              </Card>
              <Group>
                <SimpleCell
                  disabled
                  before={
                    <Avatar src={'https://vk.com/images/camera_200.png'} />
                  }
                  description={'Дизайнер'}
                >
                  Никита Пантюхин 🖌️
                </SimpleCell>
                <SimpleCell
                  disabled
                  before={
                    <Avatar
                      src={
                        'https://sun1-29.userapi.com/s/v1/if1/9fvQlEahsnJFyqr_H70eDnwzeSKCym-MgdR1KNs4-BRVIfePunF1WBaGhdJcJf-Z5Z4bzEwW.jpg?size=200x0&quality=96&crop=0,240,960,960&ava=1'
                      }
                    />
                  }
                  description={'IOS-разработчик'}
                >
                  Александр Бугаёв 👨‍💻
                </SimpleCell>
                <SimpleCell
                  disabled
                  before={
                    <Avatar
                      src={
                        'https://sun1-98.userapi.com/s/v1/if1/Qp55lygs9lhj-CkT70qf0RH4guUNyOf7vc0awNtW7XtWfEu8oOCPhIAsNWX4tB3-ghh10pgk.jpg?size=200x0&quality=96&crop=0,10,1124,1124&ava=1'
                      }
                    />
                  }
                  description={'Backend-разработчик'}
                >
                  Павел Анохин 👨‍💻
                </SimpleCell>
                <SimpleCell
                  disabled
                  before={
                    <Avatar src={'https://vk.com/images/camera_200.png'} />
                  }
                  description={'Frontend-developer'}
                >
                  Daniil Kuznetsov 👨‍💻
                </SimpleCell>
              </Group>
              <Footer>
                <Text weight={'medium'}>24 - 25 апреля</Text>
                <Text weight={'regular'}>Тула • online</Text>
              </Footer>
            </Panel>
          </View>
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  );
};
