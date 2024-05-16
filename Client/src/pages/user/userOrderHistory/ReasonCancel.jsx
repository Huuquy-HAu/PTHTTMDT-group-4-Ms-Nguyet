import React from 'react'
import { Button, Modal } from 'antd';
import { useState } from 'react'
function ReasonCancel() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <div className='reason-container'>
            <div className="reason-title">
                <svg height="16" width="16" viewBox="0 0 16 16" className="shopee-svg-icon bEjeWz"><g fillRule="evenodd"><path d="m8 15c-3.8596721 0-7-3.1397891-7-6.9994612 0-3.8602109 3.1403279-7.0005388 7-7.0005388 3.8602109 0 7 3.1403279 7 7.0005388 0 3.8596721-3.1397891 6.9994612-7 6.9994612z" fill="none" strokeWidth="1" stroke="currentColor"></path><path d="m10.4132188 9.3999583h-5.050999c-.204396 0-.3841766-.1081321-.4918691-.297583-.0404396-.0712089-.1556047-.3239567.0413188-.6303309.0694507-.1248354.1643959-.2835171.2738467-.4593416.1050552-.1701102.1969235-.3371435.2791214-.5112098.086154-.1789015.1617586-.3705502.2259345-.5709901.0553847-.1771432.0839562-.3674733.0839562-.5652758 0-.2738467.0404396-.5287923.1204398-.7556059.075165-.2197807.1797806-.4193415.3098907-.5934078.125275-.1674729.2747258-.3151655.4457152-.4382426.1397805-.0989013.2826379-.1775828.4276932-.2369235.6247463-.29029 1.6628604-.0523078 1.6487945.0083517.1424179.0589012.2707698.1279123.3890118.2096707.1767036.1217585.333627.2747258.4646163.4540668.1283519.1784619.2312092.3810997.3050556.6013199.0760441.2232971.1147255.4738471.1147255.7437377 0 .1912092.0281319.3802205.0848353.5626385.0637364.2052751.1397805.3995612.2268136.5780231.0887914.1850553.1832971.3542864.2821984.5050559.1046156.1604399.1982421.297583.2826379.4123085.0874727.1160442.1296706.2505499.122198.3876931-.0061539.1107695-.0404396.2162642-.0989013.3041764-.0562639.0870331-.1305497.1591212-.2101103.2026378-.0685716.0404396-.1665937.0892309-.2769236.0892309zm-3.9906114.7572683h3.0423323c-.1878895.8170573-.6949449 1.2255859-1.5211662 1.2255859s-1.3332766-.4085286-1.5211662-1.2255859z" stroke="none" fill="currentColor"></path></g></svg>

                <span>Vui lòng chọn lí do hủy đơn hàng. Lưu ý: Thao tác này sẽ hủy tất cả các sản phẩm có trong đơn hàng và không thể hoàn tác.</span>
            </div>

            <ul className="main-reason">
                <li>
                    <div> <input type="radio" name="reason-input" id="" /></div>
                    <div className="reason-content">Muốn thay đổi địa chỉ giao hàng</div>
                </li>

                <li>
                    <input type="radio" name="reason-input" id="" />
                    <div className="stardust-radio__content"><div className="stardust-radio__label"><div>Muốn nhập/thay đổi mã Voucher</div></div></div>
                </li>

                <li>
                    <input type="radio" name="reason-input" id="" />
                    <div className="stardust-radio__content"><div className="stardust-radio__label"><div>Muốn thay đổi sản phẩm trong đơn hàng (size, màu sắc, số lượng,...)</div></div></div>
                </li>

                <li>
                    <input type="radio" name="reason-input" id="" />
                    <div className="stardust-radio__content"><div className="stardust-radio__label"><div>Thủ tục thanh toán quá rắc rối</div></div></div>
                </li>

                <li>
                    <input type="radio" name="reason-input" id="" />
                    <div className="stardust-radio__content"><div className="stardust-radio__label"><div>Muốn nhập/thay đổi mã Voucher</div></div></div>
                </li>

                <li>
                    <input type="radio" name="reason-input" id="" />
                    <div className="stardust-radio__content"><div className="stardust-radio__label"><div>Tìm thấy giá rẻ hơn ở chỗ khác</div></div></div>
                </li>
            </ul>
        </div>
    )
}

export default ReasonCancel