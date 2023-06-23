import type { FC } from 'react';
import { ScrollView } from 'react-native';
import {
  Avatar,
  AvatarGroup,
  BaseText,
  Box,
  Card,
  Divider,
  GenericCard,
  Label,
  Tag,
} from 'react-native-microkit-rn';
import React from 'react';
import { theme } from 'example/src/theme-basic';
const DataDisplay: FC = () => {
  let font = require('../../../assets/fonts/ttf/Montserrat-SemiBold.ttf');
  return (
    <ScrollView
      contentContainerStyle={{
        padding: 20,
        gap: 25,
      }}
    >
      <Label title="Card" />
      <Card
        src={require('./wallet.png')}
        title="Setup you wallet"
        description="Create our wallter here"
        buttonMode="start"
      />
      <Card
        src={require('./wallet.png')}
        title="Setup you wallet"
        description="Create our wallter here"
        buttonMode="center"
      />
      <Card
        src={require('./wallet.png')}
        title="Setup you wallet"
        description="Create our wallter here"
        buttonMode="end"
      />
      <Card
        src={require('./wallet.png')}
        title="Setup you wallet"
        description="Create our wallter here"
        showButton={false}
      />

      <Card
        src={require('./wallet.png')}
        title="Setup you wallet"
        description="Create our wallter here"
        showButton={false}
        mode="right"
      />
      <Divider type="h" spaccingBottom={20} spaccingTop={20} />
      <Label title="Example Customize" />

      <Card
        src={require('./Ticket.png')}
        title={
          <Box row aCenter gap={10}>
            <BaseText
              style={{
                fontSize: 34,
                fontFamily: theme.base.font.bold,
              }}
            >
              $10
            </BaseText>
            <Tag title="+0.5% extra" color={'#86f12d'} />
          </Box>
        }
        titleInText={false}
        description="Refer 2 friends in the last 30 days."
        showButton={false}
        mode="right"
        styleImage={{
          position: 'absolute',
          left: -14,
          bottom: -0,
          width: 140,
          height: 100,
        }}
        style={{
          padding: 0,
        }}
        stylesWrapper={{
          overflow: 'hidden',
          borderRadius: 8,
          gap: 0,
          padding: 14,
        }}
        styleDescription={{
          fontSize: 16,
          fontFamily: theme.base.font[400],
          color: theme.base.colors['--color-base_sonicsilver'],
          width: '60%',
        }}
      />
      <Divider type="h" spaccingBottom={20} spaccingTop={20} />

      <Box row gap={20}>
        <Card
          src={require('./wallet.png')}
          title="Setup you wallet"
          description="Create our wallter here"
          mode="bottom"
          buttonMode="end"
          style={{
            width: 200,
          }}
          styleImage={{
            height: 80,
          }}
        />
        <Card
          src={require('./wallet.png')}
          title="Setup you wallet"
          description="Create our wallter here"
          mode="bottom"
          buttonMode="end"
          infoMode="invert"
          style={{
            width: 200,
          }}
          styleImage={{
            height: 80,
          }}
          propsDescription={{ numberOfLines: 1 }}
        />
      </Box>
      <Divider type="h" />
         


      <BaseText title="Avatar Examples" />
      <Label title="Mode 'letter'" />
      <Box row style={{ gap: 10 }}>
        <Avatar
          width={80}
          height={80}
          fontPath={font}
          fontSize={40}
          borderRadius={100}
          colors={['#d9d9d9', '#e38220']}
          mode="letter"
          letter="T"
        />
        <Avatar
          width={80}
          height={80}
          fontPath={font}
          fontSize={40}
          borderRadius={100}
          colors={['#9637ef', '#ffffff']}
          mode="letter"
          letter="G"
        />
        <Avatar
          width={40}
          height={40}
          fontPath={font}
          fontSize={20}
          borderRadius={8}
          colors={['#000000', '#ffffff']}
          mode="letter"
          letter="M"
        />
        <Avatar
          width={40}
          height={40}
          fontPath={font}
          fontSize={22}
          borderRadius={2}
          colors={['#5ea0fd', '#ffffff']}
          mode="letter"
          letter="T"
        />
      </Box>
      <Label title="Mode 'Gradient'" />
      <Box row style={{ gap: 10 }}>
        <Avatar
          width={80}
          height={80}
          fontPath={font}
          fontSize={40}
          borderRadius={100}
          colors={['#ffa953', '#e38220', '#20e36e']}
          mode="gradient"
          onGenerate={(url: string) => {
            console.log(url);
          }}
        />
        <Avatar
          width={80}
          height={80}
          fontPath={font}
          fontSize={40}
          borderRadius={100}
          colors={['#9637ef', '#df5d5d', '#d975f2']}
          mode="gradient"
        />
        <Avatar
          width={40}
          height={40}
          fontPath={font}
          fontSize={20}
          borderRadius={8}
          colors={['#000000', '#6be0bb', '#79fffb']}
          mode="gradient"
        />
        <Avatar
          width={40}
          height={40}
          fontPath={font}
          fontSize={22}
          borderRadius={2}
          colors={['#8fbeff', '#61c8e5', '#6b17d2']}
          mode="gradient"
        />
      </Box>
      <Label title="Mode 'Image'" />
      <Box row style={{ gap: 10 }}>
        <Avatar
          width={80}
          height={80}
          borderRadius={100}
          src={{ uri: 'https://unsplash.it/400/400?image=1' }}
          mode="image"
          style={{ borderColor: '#fff', borderWidth: 2 }}
        />
        <Avatar
          width={40}
          height={40}
          borderRadius={8}
          src={{ uri: 'https://unsplash.it/400/400?image=1' }}
          mode="image"
        />
        <Avatar
          width={40}
          height={40}
          borderRadius={2}
          src={{ uri: 'https://unsplash.it/400/400?image=1' }}
          mode="image"
        />
      </Box>
      <Divider type="h" />
      <Label title="Avatars Group" />
      <AvatarGroup
        title={'+5'}
        stylesTitle={{
          borderWidth: 2,
          borderColor: '#ffffff',
          marginLeft: -20,
        }}
        items={[
          {
            width: 40,
            height: 40,
            borderRadius: 100,
            src: { uri: 'https://unsplash.it/400/400?image=1' },
            mode: 'image',
            style: {
              borderWidth: 2,
              borderColor: '#ffffff',
            },
          },
          {
            width: 40,
            height: 40,
            borderRadius: 100,
            src: { uri: 'https://unsplash.it/400/400?image=1' },
            mode: 'image',
            style: {
              marginLeft: -10,
              borderWidth: 2,
              borderColor: '#ffffff',
            },
          },
          {
            width: 40,
            height: 40,
            borderRadius: 100,
            src: { uri: 'https://unsplash.it/400/400?image=1' },
            mode: 'image',
            style: {
              marginLeft: -10,
              borderWidth: 2,
              borderColor: '#ffffff',
            },
          },
        ]}
      />
      <Label title="Suport Letter" />
      <AvatarGroup
        title={'+50'}
        stylesTitle={{
          borderWidth: 2,
          borderColor: '#ffffff',
          marginLeft: -20,
          width: 42,
          height: 42,
        }}
        items={[
          {
            width: 40,
            height: 40,
            borderRadius: 100,
            mode: 'letter',
            fontPath: font,
            fontSize: 14,
            letter: 'T',
            style: {
              marginLeft: -10,
            },
            stroke: true,
            styleStroke: {
              strokeWidth: 2,
              style: 'stroke',
              color: '#fff',
            },
          },
          {
            width: 40,
            height: 40,
            borderRadius: 100,

            mode: 'letter',
            fontPath: font,
            fontSize: 14,
            letter: 'G',
            style: {
              marginLeft: -10,
            },
            stroke: true,
            styleStroke: {
              strokeWidth: 2,
              style: 'stroke',
              color: '#fff',
            },
          },
          {
            width: 40,
            height: 40,
            borderRadius: 100,

            mode: 'letter',
            fontPath: font,
            fontSize: 14,
            letter: 'M',
            style: {
              marginLeft: -10,
            },
            stroke: true,
            styleStroke: {
              strokeWidth: 2,
              style: 'stroke',
              color: '#fff',
            },
          },
        ]}
      />
      <Divider type="h" />
      <Label title="Generic Card" />
      <Box column style={{ gap: 20 }}>
        <GenericCard
          title="Lorem"
          description={'lorem'}
          image={{ uri: 'https://unsplash.it/400/400?image=1' }}
        />
        <Box
          style={{
            backgroundColor: '#fff',
            borderRadius: 14,
            padding: 20,
          }}
        >
          <GenericCard
            title="Lorem"
            description={'lorem'}
            image={{ uri: 'https://unsplash.it/400/400?image=1' }}
            button={'Lorem'}
          />
        </Box>
      </Box>
    </ScrollView>
  );
};

export default DataDisplay;
