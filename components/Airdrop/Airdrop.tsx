import { WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';
import React, { FC, useCallback, useState } from 'react';
import { Button } from '@mui/material';
import { AirdropSucessFull } from './AirdropSucess';
import styles from './Styles/Airdrop.module.css'

export const Airdrop: FC = () => {
    const { connection } = useConnection();
    const { publicKey, sendTransaction } = useWallet();
    const [isAirdrop, setAirdrop] = useState(false);

    const airdropSol = useCallback(async () => {
        if (!publicKey) {
            throw new WalletNotConnectedError() && alert('Wallet not connected');
        }

        try {
            console.log('Air dropping... 2 SOL');
            const fromAirDropSignature = await connection.requestAirdrop(
                publicKey,
                2 * LAMPORTS_PER_SOL // max airdrop at max 2 SOL in one transaction
            );
            await connection.confirmTransaction(fromAirDropSignature);
            console.log('Drop successful!');
            setAirdrop(true);
        } catch (err) {
            console.log(err);
        }
    }, [publicKey, connection]);

    return (
        <div>
            <div>
                <Button onClick={airdropSol}  variant="text" >
                    <p className={styles.p}>Airdrop SOL</p>
                </Button>
            </div>
            <div className={styles.notificationAirdropSucess}>
                {isAirdrop ? <AirdropSucessFull /> : null}
            </div>
        </div>
    );
};
