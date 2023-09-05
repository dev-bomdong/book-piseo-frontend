'use client';
import { LogoGnb } from '@assets/icons';
import Image from 'next/image';
import React from 'react';
import { IcWrite } from '@assets/icons';
import Link from 'next/link';
import { useAuthStore } from '@stores/useAuthStore';
import useStore from '@hooks/useStore';
import { IconButton } from '@components/elements/buttons/IconButton';
import RoundButton from '@components/elements/buttons/RoundButton';
import { useRouter, usePathname } from 'next/navigation';
import Avatar from '@components/elements/avatars/Avatar';
import { ModalType, useModalActions } from '@stores/useModalStore';

export default function HeaderPage() {
	const router = useRouter();
	const pathName = usePathname();
	const store = useStore(useAuthStore, (state) => state);
	const changeModalState = useModalActions();

	if (pathName === '/') {
		router.push('/home');
	}

	if (pathName === '/signin') return <></>;

	const handleAvatar = () => {
		store && store.setIsLogin(false);
		router.push('/home');
	};

	const handleSaveButton = () => {
		changeModalState(ModalType.postConfirm);
	};

	return (
		<header className="page-header fixed top-0 flex w-screen rem:h-[80px] items-center justify-between rem:px-[120px] bg-white z-50">
			<Link href="/home">
				<Image src={LogoGnb} alt="logo" className="rem:w-[144px] rem:h-[30px]" />
			</Link>
			<div className="flex items-center rem:gap-[40px]">
				{store && !store.isLogin ? (
					<Link href="/signin">
						<RoundButton type="secondary" label="로그인" />
					</Link>
				) : (
					<>
						{/* MARK :: SAVE BUTTON */}
						{pathName === '/post' && <RoundButton label="저장" disabled={false} onClick={handleSaveButton} />}
						{/*// MARK :: WRITING BUTTON*/}
						<Link href="/post">
							<IconButton icon={IcWrite} label="글쓰기" />
						</Link>
						{/* MARK :: AVATAR  */}
						<div className="cursor-pointer" onClick={handleAvatar} title="로그아웃">
							<Avatar path="" />
						</div>
					</>
				)}
			</div>
		</header>
	);
}
