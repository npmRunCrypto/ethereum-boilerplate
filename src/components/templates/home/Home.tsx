/* eslint-disable @typescript-eslint/no-shadow */
import { CheckCircleIcon, SettingsIcon } from '@chakra-ui/icons';
import { Heading, VStack, List, ListIcon, ListItem, Input, Button } from '@chakra-ui/react';
import CpayRadio from 'components/elements/CpayRadio';
import React, { useEffect } from 'react';
import { getEthAccounts, sendTransaction } from 'utils/web3Api';

const Home = () => {
  const [value, setValue] = React.useState('')
  const [address, setAddress] = React.useState([''])
  const [accountValue, setAccountValue] = React.useState('')
  const handleChange = (inputValue: string) => setValue(inputValue)
  const handleSend = () => { sendTransaction(accountValue, value) }
  const handleAccountChange = (value: string) => setAccountValue(value)

  useEffect(() => {
    (async () => {
      const addr = await getEthAccounts();
      setAddress(addr)
    })()
  }, [])

  const options = address.map((value, index) => ({
    label: `${index + 1}`,
    value,
  }));

  return (
    <VStack w={'full'}>
      <Heading size="md" marginBottom={6}>
        Ethereum Boilerplate
      </Heading>
      <List spacing={3}>
        <ListItem>
          <Input placeholder='Input public address(0x)' value={value} onChange={(e) => handleChange(e.target.value)} />
          <Button onClick={handleSend} />
        </ListItem>
        <ListItem>
          Account
        </ListItem>
        <ListItem>
          <CpayRadio options={options} value={accountValue} onChange={handleAccountChange} />;
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Display ERC20 balances
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Display NFT balances
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Display NFT transfers
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Multichain Support
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Using Moralis from client-side
        </ListItem>
        <ListItem>
          <ListIcon as={SettingsIcon} color="green.500" />
          Adding explorer links to balances, transactions ...
        </ListItem>
        <ListItem>
          <ListIcon as={SettingsIcon} color="green.500" />
          Better responsive design
        </ListItem>
        <ListItem>
          <ListIcon as={SettingsIcon} color="green.500" />
          Rainbowkit integration
        </ListItem>
        <ListItem>
          <ListIcon as={SettingsIcon} color="green.500" />
          ... and more
        </ListItem>
      </List>
    </VStack>
  );
};

export default Home;
