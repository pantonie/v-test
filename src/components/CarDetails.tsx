import React, { FC } from 'react';
import { Flex, Block, Link } from 'vcc-ui';
import { ICarDetails } from 'src/types';

interface IProps extends ICarDetails {
    classN: string
}

export const CarDetails: FC<IProps> = (
  { id,
    modelName,
    bodyType,
    modelType,
    imageUrl,
    classN
  }: IProps) => {
  return(
    <Flex extend={{margin: '0 10px'}} className={classN} key={id}>
      <Block extend={{color: '#707070'}}>{bodyType.toUpperCase()}</Block>
        <Flex extend={{
          flexDirection: 'row',
          alignItems: 'baseline',
          '@media (max-width: 850px)': {
            flexDirection: 'column'
          }}}>
          <Block extend={{
            color: 'black',
            fontWeight: 'bold',
            margin: '10px 10px 10px 0'
          }}>
            {modelName}
          </Block>
          <Block extend={{
            color: '#707070',
            marginBottom: '10px'
          }}>
            {modelType}
          </Block>
        </Flex>
      <img src={`${imageUrl}`} alt={id} style={{maxWidth: "400px"}}/>
      <Flex extend={{alignSelf: 'center', flexDirection: 'row', marginTop: '10px'}}>
          <Link href={`/learn/${id}`} arrow="right" style={{marginRight: '30px'}}>Learn</Link>
          <Link href={`/shop/${id}`} arrow="right">Shop</Link>
      </Flex>
    </Flex>
)
}