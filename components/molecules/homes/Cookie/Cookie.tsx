import { FC } from 'react'
import { Box } from '@chakra-ui/react'
import { CookieConsent } from 'react-cookie-consent'
import styles from 'styles/Home.module.scss'

const Cookie: FC = () => {
  return (
    <CookieConsent
      onAccept={() => {
        console.log('accept')
      }}
      onDecline={() => {
        console.log('decline')
      }}
      buttonStyle={{
        color: 'white',
        backgroundColor: '#333333',
        fontSize: '13px',
        padding: '15px',
        borderRadius: '5px',
        minWidth: '100px'
      }}
      buttonText="クッキー利用に同意する"
      enableDeclineButton
      declineButtonText="同意しない"
      declineButtonStyle={{
        background: 'none',
        color: '#333333'
      }}
      buttonWrapperClasses={styles['home__cookie__btn-wrapper']}
      contentStyle={{ whiteSpace: 'pre-wrap', color: 'black', flex: 'none' }}
      style={{
        zIndex: 1000,
        minHeight: '92px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'white',
        boxShadow: '0px -10px 12px rgba(0, 0, 0, 0.14)'
      }}
    >
      <Box fontSize={{ base: '14px' }}>
        このWebサイトでは閲覧者のコンピューターにCookieを保存します。
        <br />
        サイトの利便性向上のため、Cookie保存の同意をお願いします。詳しくは
        <a href="https://www.code4japan.org/privacy-policy">プライバシーポリシー</a>をご確認ください。
      </Box>
    </CookieConsent>
  )
}

export default Cookie
