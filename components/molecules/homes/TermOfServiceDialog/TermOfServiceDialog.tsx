import { FC } from 'react'
import { Box, Text } from "@chakra-ui/react";
import PatchExclamation from "components/atoms/icons/PatchExclamation";
import ModalBase from 'components/molecules/modal/Base'
import styles from 'styles/Home.module.scss'
import { termOfServices } from "constants/termOfService";
import BasicButton from "components/atoms/buttons/Basic";
import { useRouter } from "next/router";

type Props = {
  className?: string
  isOpen: boolean
  onClose: { (): void }
  sp: boolean
}

const serviceName = "じぶんごとプラネット"

const TermOfServiceDialog: FC<Props> = (props) => {
  const router = useRouter()
  return (
    <ModalBase isOpen={props.isOpen} onClose={props.onClose} maxWidth={ props.sp ? "90%" : "60%"}>
      <Box px={{base: 1, md: 3}} py={6}>
        <Box pb={5} display="flex" alignItems="center">
          <PatchExclamation />
          <Text fontSize="14px" fontWeight="bold" pl={3}>{`${serviceName} 利用規約`}</Text>
        </Box>
        <Text>
          {serviceName} 利用規約（以下「<span className={styles["home__fb"]}>本規約</span>」といいます）は、
          一般社団法人コード・フォー・ジャパン（以下「<span className={styles["home__fb"]}>CfJ</span>」といいます）が運営するカーボンフットプリント計算ツールを含むウェブアプリケーション「{serviceName}」
          （以下「本サービス」といいます）の利用条件を定めるものです。本サービスを利用する皆様は、ご利用前に本規約をよく読み、本規約に同意の上でご利用ください
        </Text>
        <Box pb={10}>
          {
            termOfServices.map((termOfService) => {
              return (
                <>
                  <Text fontWeight="bold" pt={6} pb={3}>{termOfService.title}</Text>
                  <div
                    style={{ whiteSpace: "pre-wrap" }}
                    dangerouslySetInnerHTML={{
                      __html: termOfService.body
                    }}
                  />
                </>
              )
            })
          }
        </Box>
        <Box display={'flex'} justifyContent={'center'}>
          <BasicButton width="70%" textAlign={'center'} onClick={() => router.push('/top')}>
            同意して続ける
          </BasicButton>
        </Box>
      </Box>
    </ModalBase>
  )
}

export default TermOfServiceDialog
