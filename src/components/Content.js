import React from 'react';
import {ScrollView ,View, Text} from 'react-native';

function Content(props) {
    return (
        <ScrollView>
            <View>
                <Text>
                    Bộ Y tế tối 21/6 ghi nhận 135 ca dương tính, trong đó 70 ca tại TP HCM, đưa số ca trong một ngày ở thành phố lên cao nhất từ trước tới nay, 166.
                </Text>
                <Text>
                    Trong ngày, Việt Nam ghi nhận tổng cộng 272 ca mắc mới gồm 267 ca trong nước. Trong đó 258 ca được phát hiện trong khu cách ly hoặc khu đã được phong toả.
                </Text>
                <Text>
                    Hôm nay, 224 bệnh nhân được công bố khỏi bệnh, 3 ca tử vong, nâng tổng số khỏi lên 5.453 ca, tử vong 69 ca.
                </Text>
                <Text>
                    19 tỉnh (Yên Bái, Quảng Ngãi, Quảng Ninh, Quảng Trị, Thừa Thiên Huế, Tuyên Quang, Sơn La, Ninh Bình, Thanh Hóa, Thái Nguyên, Hải Phòng, Tây Ninh, Gia Lai, Bạc Liêu, Điện Biên, Đắk Lắk, Đồng Tháp, Thái Bình, Vĩnh Phúc) đã qua 14 ngày không ghi nhận trường hợp mắc mới trong cộng đồng.
                </Text>
                <Text>
                    8 tỉnh gồm Ninh Bình, Quảng Ngãi, Quảng Ninh, Quảng Trị, Sơn La, Thừa Thiên Huế, Tuyên Quang, Yên Bái, đã qua 30 ngày không ghi nhận trường hợp mắc mới.
                </Text>
                <Text>
                    Hưng Yên xuất hiện ca mới sau 20 ngày không ghi nhận ca nhiễm.
                </Text>
            </View>
        </ScrollView>
    )
}

export default Content;