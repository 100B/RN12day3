import React from 'react';
import {ScrollView , Text, Image} from 'react-native';
import photo2 from '../../images/photo2.png';
import photo3 from '../../images/photo3.png';


function Content2(props) {
    return(
        <ScrollView >
            <Text>
            Số lượng xét nghiệm từ 29/4 đến nay đã thực hiện 2.544.659, cho 5.776.150 lượt người.

135 ca mắc mới công bố tối nay từ số 13349-13483. Trong đó, 133 ca ghi nhận trong nước, gồm tại TP HCM (70), Bắc Giang (30), Bình Dương (21), Bắc Ninh (6), Đà Nẵng (4), Hưng Yên (2); trong số này có 130 ca được phát hiện trong khu cách ly hoặc khu đã được phong toả.
            </Text>
            <Image source={photo2}/>
            <Text>
            Bình Dương

Ca 13349-13359, 13361-13368, 13372, 13374 gồm 18 ca liên quan ổ dịch Công ty Housewares - TP. Thuận An, 2 ca liên quan ổ dịch chợ đầu mối Hóc Môn - TP. Hồ Chí Minh, một ca đang điều tra dịch tễ. Kết quả xét nghiệm ngày 20/6 dương tính, họ đang cách ly, điều trị tại Bệnh viện Đa khoa tỉnh Bình Dương.

Đà Nẵng

Ca 13369-13371, 13373 là các trường hợp F1, đã được cách ly từ trước. Kết quả xét nghiệm ngày 20/6 dương tính.

Hưng Yên

Ca 13376-13377 đang điều tra dịch tễ. Kết quả xét nghiệm ngày 21/6 dương tính, đang cách ly, điều trị tại Bệnh viện Bệnh Nhiệt đới Trung ương cơ sở 2.

Bắc Giang

Ca 13378-13407 ghi nhận tại tỉnh Bắc Giang trong khu cách ly và khu vực đã được phong tỏa, liên quan đến công nhân làm tại các khu công nghiệp. Kết quả xét nghiệm ngày 20-21/6 dương tính.

Bắc Ninh

Ca 13408-13413 gồm một ca là F1 của 8757 đã được cách ly, 3 ca liên quan đến ổ dịch Khu công nghiệp Quế Võ, 2 ca liên quan đến ổ dịch Khu công nghiệp Khắc Niệm. Kết quả xét nghiệm ngày 20/6 dương tính, đang cách ly, điều trị tại Bệnh viện Đa khoa tỉnh Bắc Ninh.

TP HCM

Ca 13414-13483 gồm 49 ca là các trường hợp F1 đã được cách ly; 14 ca liên quan đến Công ty Trung Sơn, Khu công nghiệp Tân Tạo, quận Bình Tân; 7 ca liên quan đến nhóm truyền giáo Phục hưng.
            </Text>
            <Image source={photo3}/>
            <Text>
            2 ca nhập cảnh

Ca 13360 được cách ly ngay sau khi nhập cảnh tại tỉnh An Giang, nữ, 53 tuổi, địa chỉ tại huyện An Phú, tỉnh An Giang. Ngày 19/6, bà từ nước ngoài vào Việt Nam qua Cửa khẩu Quốc tế Long Bình, tỉnh An Giang và được cách ly ngay. Kết quả xét nghiệm ngày 20/6 dương tính, đang cách ly, điều trị tại Trung tâm Y tế huyện An Phú, tỉnh An Giang.

Ca 13375 được cách ly ngay sau khi nhập cảnh tại tỉnh Kiên Giang, nữ, 49 tuổi, địa chỉ tại huyện Cù Lao Dung, tỉnh Sóc Trăng. Ngày 19/6, bà vào Việt Nam qua Cửa khẩu Quốc tế Hà Tiên, tỉnh Kiên Giang và được cách ly ngay. Kết quả xét nghiệm ngày 20/6 dương tính, đang cách ly, điều trị tại Trung tâm Y tế thành phố Hà Tiên.
            </Text>
        </ScrollView>
    )
}

export default Content2;