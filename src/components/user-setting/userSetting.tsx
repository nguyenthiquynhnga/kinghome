import Link from 'next/link';
import React from "react";
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import { User } from '@/types/User';
import LogoutIcon from '@mui/icons-material/Logout';
import "./style.scss"
const UserSetting = () => {
    const user: User = {
        id: 1,
        name: 'Nguyễn Văn Đức'
    }

    return (
        <div className="user-setting_content">
            {/* check token */}
            <div className="user-setting_icon">
                <PermIdentityOutlinedIcon />
            </div>
            {
                // user !== null
                true
                 ?
                    <div className="user-setting_option1">
                        <Link href="/account">Cá nhân</Link>
                        <ul className="user-setting_menu">
                            <li className="user-setting_item user-setting_item--top"><Link href="/account">{user?.name}</Link></li>
                            <li className="user-setting_item"><Link href="/account">Tài khoản của tôi</Link></li>
                            <li className="user-setting_item"><Link href="/account">Đổi mật khẩu</Link></li>
                            <li className="user-setting_item"><Link href="/account">Đã xem gần đây</Link></li>
                            <li className="user-setting_item"><Link href="/account">Yêu thích</Link></li>
                            <li className="user-setting_item user-setting_item--bottom"><a href="/logout"><LogoutIcon/>Đăng xuất</a></li>
                        </ul>
                    </div>
                    :
                    <div className="user-setting_option2">
                        <Link href="/account/register">Đăng ký</Link>
                        <strong>/</strong>
                        <Link href="/account/login">Đăng nhập</Link>
                    </div>
            }
        </div>
    )
}

export default UserSetting;