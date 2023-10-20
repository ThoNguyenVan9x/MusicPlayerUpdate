const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const PlAYER_STORAGE_KEY = "MUSIC_PLAYER";

const player = $(".player");
const imgPlayer = $(".parent-bg");
const cd = $(".cd");
const heading = $("header h2");
const cdThumb = $(".cd-thumb");
const audio = $("#audio");
const playBtn = $(".btn-toggle-play");
const progress = $("#progress");
const prevBtn = $(".btn-prev");
const nextBtn = $(".btn-next");
const randomBtn = $(".btn-random");
const repeatBtn = $(".btn-repeat");
const playlist = $(".playlist");
const lyric = $(".lyrics-item p");

const app = {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    config: {},
    // (1/2) Uncomment the line below to use localStorage
    config: JSON.parse(localStorage.getItem(PlAYER_STORAGE_KEY)) || {},
    songs: [
        // {
        //   name: "Aloha",
        //   lyrics: `어두운 불빛아래 촛불 하나<br>
        //   와인 잔에 담긴 약속하나<br>
        //   항상 너의 곁에서 널 지켜줄거야<br>
        //   날 믿어준 너였잖아<br>
        //   나 바라는 건 오직 하나<br>
        //   영원한 행복을 꿈꾸지만<br>
        //   화려하지 않아도 꿈같진 않아도<br>
        //   너만 있어주면 돼<br>
        //   걱정 마 (I believe)<br>
        //   언제나 (I believe)<br>
        //   이 순간을 잊지 않을게<br>
        //   내 품에 (I believe)<br>
        //   안긴 너의 미소가<br>
        //   영원히 빛을 잃어 가지 않게<br>
        //   'Cause your love is so sweet<br>
        //   You are my everything<br>
        //   첫날 밤에 단 꿈에 젖어<br>
        //   하는 말이 아냐 난 변하지 않아<br>
        //   오직 너만 바라볼거야 oh<br>
        //   You're light of my life<br>
        //   You are the one in my life<br>
        //   내 모든걸 다 잃는데도<br>
        //   후회하지 않아<br>
        //   오직 너를 위한<br>
        //   변하지 않는 사랑으로<br>
        //   나 바라는 건 오직 하나<br>
        //   영원한 행복을 꿈꾸지만<br>
        //   화려하지 않아도 꿈같진 않아도<br>
        //   너만 있어주면 돼<br>
        //   약속해 (I believe)<br>
        //   힘들 땐 (I believe)<br>
        //   너의 그늘이 되어줄게<br>
        //   내품에 (I believe)<br>
        //   안긴 너의 미소가<br>
        //   영원히 빛을 잃어 가지 않게<br>
        //   'Cause your love is so sweet<br>
        //   You are my everything<br>
        //   첫날 밤에 단 꿈에 젖어<br>
        //   하는 말이 아냐 난 변하지 않아<br>
        //   오직 너만 바라볼거야 oh<br>
        //   You're light of my life<br>
        //   You are the one in my life<br>
        //   내 모든걸 다 잃는데도<br>
        //   후회하지 않아<br>
        //   오직 너를 위한<br>
        //   변하지 않는 사랑으로<br>
        //   You're light of my life<br>
        //   You are the one in my life<br>
        //   내 모든걸 다 잃는데도<br>
        //   후회하지 않아<br>
        //   오직 너를 위한<br>
        //   변하지 않는 사랑으로<br>
        //   All I ever want is your love`,
        //   singer: "Cool",
        //   path: "assets/music/Aloha.mp3",
        //   image: "assets/image/anh0.jpg",
        // },
        // {
        //   name: "À Lôi",
        //   lyrics: `Tại vì thích em nhiều quá nhưng em lại nói là "à lôi"<br>
        //       Cũng định solo Hiphop cùng với trai bản nhưng mà thôi<br>
        //       Anh gửi vào trong câu rap cho em dính cả thính, cả mồi<br>
        //       Nhà em có mấy quả đồi, ừ thì anh cũng tính cả rồi<br>
        //       Tại vì thích em nhiều quá nhưng em lại nói là "à lôi" (à lôi noọng)<br>
        //       Cũng định solo Hiphop cùng với trai bản nhưng mà thôi<br>
        //       Anh gửi vào trong câu rap cho em dính cả thính cả mồi<br>
        //       Nhà em có tới mấy quả đồi ừ thì anh cũng tính cả rồi (à lôi noọng)<br>
        //       Gặp em ở thung lũng, ném quả còn lên không trung<br>
        //       Anh bận đi tìm cảm hứng trong chuỗi ngày bị mông lung<br>
        //       Anh cầm trên tay cây nỏ, ngắm vào tâm nhưng không trúng<br>
        //       Nhưng mà lỡ bị em gây thương nhớ, bắn vào tim mà không súng<br>
        //       Trai bản em chơi đàn tính, còn anh thì gẩy guitar<br>
        //       Anh thì không biết múa khèn nhưng mà giỏi quẩy Vina<br>
        //       Yêu em mấy núi cũng trèo mặc dù không giỏi đi xa<br>
        //       Anh lại còn giỏi cả thi ca, biến homestay bản thành villa<br>
        //       Tấm lòng anh không phải thú dữ, không cần mổ bụng thì mới được xem<br>
        //       Mấy anh thanh niên trong bản phải biết uống rượu mới tán được em<br>
        //       Nhà sàn của em sẵn bậc nhưng nàng đồng ý mới có đường lên<br>
        //       Anh thì số vốn đen đủi không biết lần này liệu có được hên<br>
        //       Ừ thì noọng ơi, à lôi<br>
        //       Hai chúng mình thì cùng đẹp nết, đẹp cả đôi<br>
        //       Hội trai bản để anh dẹp hết, chấp cả hội<br>
        //       Trồng cây kín cả quả đồi, xong dắt em đi về nhà thôi<br>
        //       Ơi nọong ơi, ơi nọong ơi<br>
        //       Thương em mấy núi cũng trèo, mấy sông cũng lội, mấy đèo cũng qua<br>
        //       Nhà em ở ngay lưng đồi, nếu như có dịp mời chàng tới chơi<br>
        //       Tại vì thích em nhiều quá nhưng em lại nói là "à lôi"<br>
        //       Cũng định solo Hiphop cùng với trai bản nhưng mà thôi<br>
        //       Anh gửi vào trong câu rap cho em dính cả thính, cả mồi<br>
        //       Nhà em có mấy quả đồi, ừ thì anh cũng tính cả rồi<br>
        //       Tại vì thích em nhiều quá nhưng em lại nói là "à lôi" (à lôi noọng)<br>
        //       Cũng định solo Hiphop cùng với trai bản nhưng mà thôi<br>
        //       Anh gửi vào trong câu rap cho em dính cả thính, cả mồi<br>
        //       Nhà em có tới mấy quả đồi, ừ thì anh cũng tính cả rồi<br>
        //       À lôi<br>
        //       Một, hai, ba, yeah, nơng, thoong, tham<br>
        //       Đây là người miền núi phía Bắc Việt Nam (Việt Nam)<br>
        //       Hiên ngang, không thích luồn cúi (hiên ngang)<br>
        //       Flexing theo kiểu miền núi (flex, flex)<br>
        //       Ta chơi nhạc Trap, Hiphop trên bản làng<br>
        //       Bản này là bản chất, biến từ đất thành bản vàng<br>
        //       Từ những ngày khó khăn, các dân tộc còn tản mạn<br>
        //       Đến ngày chung tay cùng làm kinh tế, tiền chất đống như tải hàng<br>
        //       Và ta đi lên từ bàn tay trắng (từ bàn tay trắng)<br>
        //       Cần cù chịu khó, không nhờ may mắn (không nhờ may mắn)<br>
        //       Trải qua khó khăn một mưa hai nắng (một mưa hai nắng)<br>
        //       Người biết khiêm tốn là người hay thắng<br>
        //       À lôi, à lôi<br>
        //       Người miền núi chất nói à lôi, à lôi<br>
        //       Hiền lành nhưng chiến như gà chọi, gà chọi<br>
        //       Ở đây hay nói là à lôi, mọi người thường nói là à lôi<br>
        //       À lôi, à lôi<br>
        //       Người miền núi chất nói à lôi, à lôi<br>
        //       Hiền lành nhưng chiến như gà chọi<br>
        //       Ở đây hay nói là à lôi, mọi người thường nói là à lôi (à lôi)`,
        //   singer: "Double2T",
        //   path: "./assets/music/ALoi-Double2TMasew-10119691.mp3",
        //   image: "assets/image/anh1.jpeg",
        // },
        // {
        //   name: "Chờ Ngày Cưới Em",
        //   lyrics: `Chờ đợi em bấy lâu nay để kêu anh bằng chồng<br>
        //   Trọn đời anh hứa sẽ không hai lòng<br>
        //   Kết thông gia hai nhà ta, tùng dinh tùng dinh qua rước dâu<br>
        //   Bằng lòng anh sang anh mang bưng theo cau trầu<br>
        //   <br>
        //   Mãi mãi không đổi thay, tình này nguyện trao em đắm say<br>
        //   Cưới em về sẽ không bao giờ để em khóc<br>
        //   Nếu như một ngày em buồn, anh sẽ làm cả bầu trời<br>
        //   Để cho em thấy không chơi vơi<br>

        //   <br>
        //   VER 1:<br>
        //   <br>
        //   Cuộc đời kín cói khiến lắm lúc thăng trầm mỗi tối<br>
        //   Chỉ ước mong sao để mau được giàu lên<br>
        //   Nhờ người mai mối để rước em về mỗi tối<br>
        //   Nằm cạnh bên em để kêu em vợ ơi<br>
        //   <br>
        //   Bởi quá thương em nên anh ráng sang năm<br>
        //   Mần ăn nên anh hốt em về làm dâu<br>
        //   Chút yêu thương thêm chút mê say<br>
        //   Làm lòng em chắc chắn sẽ là ngất ngây<br>
        //   <br>
        //   Chờ đợi em bấy lâu nay để kêu anh bằng chồng<br>
        //   Trọn đời anh hứa sẽ không hai lòng<br>
        //   Kết thông gia hai nhà ta, tùng dinh tùng dinh qua rước dâu<br>
        //   Bằng lòng anh sang anh mang bưng theo cau trầu<br>
        //   <br>
        //   Mãi mãi không đổi thay, tình này nguyện trao em đắm say<br>
        //   Cưới em về sẽ không bao giờ để em khóc<br>
        //   Nếu như một ngày em buồn, anh sẽ làm cả bầu trời<br>
        //   Để cho em thấy không chơi vơi<br>
        //   <br>
        //   RAP:<br>
        //   <br>
        //   Rước con dâu hiền ngoan, để rồi pháo hoa theo tràn lan<br>
        //   Rượu mừng uống cho sang thiệt sang, họ hàng chúc cho ta rùm rang<br>
        //   Lòng mừng vì có em bên đời anh, cùng nhau mình sánh bạc mái đầu xanh<br>
        //   Hẹn lòng nguyện ước trăm năm thành đôi, giờ mình cùng tính đi ôi dồi ôi vô rồi<br>
        //   <br>
        //   VER 2:<br>
        //   <br>
        //   Bởi quá thương em nên anh ráng sang năm<br>
        //   Mần ăn nên anh hốt em về làm dâu<br>
        //   Chút yêu thương thêm chút mê say<br>
        //   Làm lòng em chắc chắn sẽ là ngất ngây<br>
        //   <br>
        //   Chờ đợi em bấy lâu nay để kêu anh bằng chồng<br>
        //   Trọn đời anh hứa sẽ không hai lòng<br>
        //   Kết thông gia hai nhà ta, tùng dinh tùng dinh qua rước dâu<br>
        //   Bằng lòng anh sang anh mang bưng theo cau trầu<br>
        //   <br>
        //   Mãi mãi không đổi thay, tình này nguyện trao em đắm say<br>
        //   Cưới em về sẽ không bao giờ để em khóc<br>
        //   Nếu như một ngày em buồn, anh sẽ làm cả bầu trời<br>
        //   Để cho em thấy không chơi vơi<br>
        //   <br>
        //   Hương Ly:<br>
        //   Thương anh mấy núi em cũng trèo, mấy sông em cũng lội, mấy đèo em cũng qua<br>
        //   Thương anh cái tính anh thật thà, trai quê mà chân chất mượt mà sao dễ thương`,
        //   singer: "Phát Hồ - Hương Ly",
        //   path: "assets/music/ChoNgayCuoiEm.mp3",
        //   image: "assets/image/anh2.jpeg",
        // },
        // {
        //   name: "Cô Đơn Trên Sofa",
        //   lyrics: `Cô đơn trên sofa con tim như tan ra<br>
        //         Dẫn lối em trôi theo một khúc ca buồn<br>
        //         Giữa căn phòng ánh đèn chợt tắt<br>
        //         Che đi giọt buồn sắp rơi<br>
        //         Cô đơn trên sofa sao anh yêu cô ta<br>
        //         Chẳng phải anh yêu em hơn cả anh mà<br>
        //         Để cho thanh xuân này chợt tắt<br>
        //         Trên mi giọt nước mắt rơi<br>
        //         Thì ra là thế tình nào là tình chẳng mờ phai tháng năm<br>
        //         Một ngày vẫn trôi đôi môi em phai màu nắng<br>
        //         Nếu không em thì anh có buồn<br>
        //         Hoá ra chỉ mình em đáng thương<br>
        //         Đừng buông lời hứa rồi lại vờ rằng dường như anh đã quên<br>
        //         Đừng tìm đến em gieo tương tư xong lại đi<br>
        //         Nắng xuyên qua hàng mi rối bời<br>
        //         Giữ tim em vài giây cuối thôi<br>
        //         Để em được ngã lưng lên một chiếc sofa<br>
        //         Để nghe một phút tim yên bình đến kỳ lạ<br>
        //         Để em được sống vô tư như một bông hoa<br>
        //         Giữa bầu trời kiêu sa<br>
        //         Cho em thôi miệt mài nghĩ suy<br>
        //         Người ơi hãy nói em nghe một lý do đi<br>
        //         Vì sao lại để em vương sầu trên khoé mi<br>
        //         Vì sao lại biến cô đơn thành giông tố<br>
        //         Nỗi buồn sóng vỗ<br>
        //         Tâm hồn em trôi lênh đênh trong căn phòng<br>
        //         Rồi lại rơi xuống trên sofa<br>
        //         Rồi lại rơi xuống trên sofa<br>
        //         Rồi lại rơi xuống trên sofa<br>
        //         Rồi lại rơi xuống trên sofa<br>
        //         Cô đơn trên sofa sao anh yêu cô ta<br>
        //         Chẳng phải anh yêu em hơn cả anh mà<br>
        //         Để cho thanh xuân này chợt tắt<br>
        //         Trên mi giọt nước mắt rơi<br>
        //         Thì ra là thế tình nào là tình chẳng mờ phai tháng năm<br>
        //         Một ngày vẫn trôi đôi môi em phai màu nắng<br>
        //         Nếu không em thì anh có buồn<br>
        //         Hoá ra chỉ mình em đáng thương<br>
        //         Đừng buông lời hứa rồi lại vờ rằng dường như anh đã quên<br>
        //         Đừng tìm đến em gieo tương tư xong lại đi<br>
        //         Nắng xuyên qua hàng mi rối bời<br>
        //         Giữ tim em vài giây cuối thôi<br>
        //         Để em được ngã lưng lên một chiếc sofa<br>
        //         Để nghe một phút tim yên bình đến kỳ lạ<br>
        //         Để em được sống vô tư như một bông hoa<br>
        //         Giữa bầu trời kiêu sa<br>
        //         Cho em thôi miệt mài nghĩ suy<br>
        //         Người ơi hãy nói em nghe một lý do đi<br>
        //         Vì sao lại để em vương sầu trên khoé mi<br>
        //         Vì sao lại biến cô đơn thành giông tố<br>
        //         Nỗi buồn sóng vỗ<br>
        //         Tâm hồn em trôi lênh đênh trong căn phòng`,
        //   singer: "Trung Quân",
        //   path: "assets/music/CoDonTrenSofaLiveCoverAtSoulOfTheForest-TrungQuanIdol-8520175.mp3",
        //   image: "assets/image/anh3.jpeg",
        // },
        {
            name: "Gấu Ở Đâu Khi Gió Đông Về",
            lyrics: `Người ta hạnh phúc tay trong tay
            Mà sao mắt tôi lại lệ cay, mà sao tim tôi lại buồn thế này<br>
            Tại sao? Bao lâu nay vui buồn ai hay<br>
            Bao nhiêu tâm tư chẳng thể nào giãi bày<br>
            Bao cố gắng chẳng thoát nổi được kiếp ép ây.<br>
            <br>
            Nhiều tôi ngắm tôi trong gương<br>
            Khuôn mặt cũng có chút dễ thương<br>
            Tính cách cũng đâu đến nỗi dị thường<br>
            Mà sao? Ấm ức tôi lên hỏi tận trung ương<br>
            Chua xót về hỏi lại xã phường<br>
            Cuối cùng vẫn là forever alone<br>
            <br>
            Ông trời ơi vì sao thế ? chẳng lẽ nào như con lại ế<br>
            Gấu ơ còn chưa có mà gió đông nay đã về<br>
            Ngẫm thấy ôi sao ê chề<br>
            Bạn bè người yêu đề huề<br>
            Mà tôi sớm tối vẫn một mình đi về đơn côi<br>
            <br>
            Hay vì không đủ kinh tế<br>
            Tình yêu không thể không chê<br>
            Ôi không nếu mà như thế thì thêm bao mùa gió về<br>
            Chắc tôi vẫn sẽ ê chề<br>
            Ngồi ca bài ca ước thề?<br>
            Where are you, baby?<br>
            Where are you, baby?<br>
            Where are you, baby?<br>
                    `,
            singer: "Cao Tùng Anh",
            path: "https://docs.google.com/uc?id=1dBOwmPv4mlSuk0Eq7FOjGtSAXVvOsOH-",
            image: "assets/image/anh6.jpeg",
        },
        {
            name: "151 Radio Mashup",
            lyrics: `MIG: <Bad luck em yêu - demo><br>
            Muốn anh va [Am]chạm<br>
            Khi anh đang skrt trên con camry<br>
            tài khoản  [G]netflix không thể xem gì<br>
            Làm nhạc về em chắc được grammy<br>
            Mặt anh đầy [F] mụn trên con MV<br>
            Trên người sắc màu khi gặp em thì<br>
            Đỏ xanh vàng [Em] tím của anh chầm chậm chuyển nâu đầm đậm và rồi đen xì<br>
             <br>
            J Cơ: <Blocked><br>
            Tình [Am] mình phải dừng lại<br>
            Vì phần còn lại là trở ngại<br>
            Em đi [G] theo tình anh đôi vai mỏng manh đôi cánh<br>
            Em bay tự do chân [F] trời<br>
            Bao la gọi tên trong đời<br>
            Trôi đi cơn mơ tương [Em] lai thế thôi<br>
            Tô son đi em mau lên không mưa ướt  môi [Am] rồi<br>
             <br>
            Sử: <Blocked><br>
            Đợi [Am]chờ cuộc đời làm tôi mệt nhoài<br>
            Vì cuộc tình [G] này làm cho đời tôi thật dài<br>
            Nhắc[F] chi tên người<br>
            Đã quên nhau rồi<br>
            Để  [Em]cho bình yên được đến với tôi…với tôi đi [Am] người<br>
             <br>
            Macchia: <M đấy - demo><br>
            Đứng ở  [Am]đây mà nhìn ra ngoài kia mắt anh liếc ngang mọi người thật nhỏ bé<br>
            Những thứ trong [G] tay anh vẫn đang có tiền bạc vật chất đây anh kể em nghe<br>
            Âm nhạc [F] hay I don’t care<br>
            Quan trọng là trăm ca (100k) share<br>
            Làm nhạc [Em] không màng vì đam mê mà chỉ cần có tiền về<br>
             <br>
             <br>
            Đôi mắt đang [Am]mờ đấy…<br>
            (Đôi mắt đang mờ đấy/ đôi mắt đang mờ đi)<br>
            đôi mắt anh đang [G] mờ<br>
            (Tiền bạc vật chất làm mắt anh mờ đấy/ đôi mắt đang mờ đi<br>
            )<br>
            Cẩn thận đôi mắt anh [F] mờ đấy…<br>
            (Làm nhạc không vì đam mê là mờ đấy/ đôi mắt đang mờ đi)<br>
            đôi mắt anh đang [Em] mờ<br>
             <br>
            (Cẩn thận không đôi mắt anh đang mờ đấy/ đôi mắt mờ đi<br>
            )<br>
             <br>
             <br>
            GDucky: <Breakfast & TNĐLG><br>
            please give me a [Am] beat when im making breakfast <br>
            please give me a [G] beat when im making breakfast <br>
            please give me a [F] beat when im making breakfast <br>
            Baby please give me a [Em]beat when im making breakfast <br>
             <br>
             <br>
            Này ratatouille [Am]chắc anh Trở thành linguini <br>
            Anh đưa em lên sofa [G] Xem phim như ở CGV <br>
            I’m finding out her [F] spot They call me the Shinichi <br>
            Em ơi lên đây đu đưa [G] đi Từ Tây Ban Nha sang Tunisia<br>
            Lênh đênh trên du [Am] thuyền mà anh thả đâu đây<br>
            I'm screaming over [G] you vì em là quả dâu tây<br>
            On a Dubai [F] trip, mua cho em thật nhiều vàng<br>
            Baby please give me a [Em] beat để đêm nay anh được chiều nàng<br>
             <br>
            Vậy thì nhiều tiền để làm [Am] gì…yeah <br>
            Vậy thì nhiều tiền để làm[G] gì…yeah <br>
            Vậy thì nhiều tiền để làm [F] gì…yeah <br>
            Vậy thì nhiều tiền để làm [Em] chi....bây giờ ..bây giờ<br>
             <br>
            Sử: <Wake up><br>
            Và [Am] Đây mới là sự thật, không phải những gì từ trong sách vở <br>
            Đừng tự [G]nhận mình cao siêu khi thực tế mày không biết cách thở<br>
             [F] Nào là luật nhân quả, nào là luật hấp dẫn<br>
             [Em]Cuộc đời mày sẽ tơi tả nếu mày ko thấm đc chữ Nhẫn<br>
             <br>
            J Cơ: <Vương & ClubRussia -demo><br>
            Và [Am] gió vẫn sẽ ước muốn ngày dài trở lại<br>
            Bởi vì tình [G] yêu không may ai đâu ai đã ngần ngại<br>
            Gió [F] đưa mây ngang trời người đi ngang qua trong đời<br>
            Ai [Em] đi qua chờ tôi đi với<br>
             <br>
            Tao nổ [Am] pháo đêm khuya ra toàn phường<br>
            Ở nơi đặt biển báo phân chia 2 làn đường<br>
            J Cơ on the [G] mic đừng vội đo độ sốc<br>
            Phục hồi hư tổn – dầu gội cho bộ óc<br>
            Sống với hip [F] hop là điều tao quý nhất<br>
            Ôi thôi ko được nghiện giống như Mike Thúy mất<br>
            Mic là công [Em] cụ trên sân khấu ta hóa thú đọc vài ba câu cũng tỏa ra khí chất<br>
             <br>
            Sử: <Tuần tra đêm><br>
            [Am]Tao đi tuần tra đêm/ bọn tao đi tuần tra đêm<br>
            Khi mà tất cả tắt [G] đèn và đi ngủ thì bọn tao lại đi làm ca thêm<br>
            [F]Tao đi tuần tra đêm/ bọn tao đi tuần tra đêm<br>
            Khi mà tất cả tắt[Em] đèn và đi ngủ thì 151 đi làm ca thêm<br>
             <br>
             <br>
            MIG: <Ice - demo><br>
            Anh tao chở [Am]đá/ trên con xe thùng/ phát nhạc cho mọi người nghe cùng<br>
            Anh tao chở [G] đá/ ok lên đường/ cứ tưởng mình đang ở trên giường<br>
            Anh tao chở [F]đá/ luôn luôn yên bình/ ngọc hoàng đưa anh lên thiên đình<br>
            Anh tao chở [Em]đá/ anh tao sẻ chia/ anh tao không giữ cho riêng [Am] mình`,
            singer: "Cao Tùng Anh",
            path: "https://docs.google.com/uc?id=10-rHI-CY0rcasLk2oA8d9iJ6C2B7mG9K",
            image: "assets/image/anh0.jpeg",
        },
        // {
        //   name: "Gió Đánh Đò Đưa",
        //   lyrics: `Gió đánh cành tre, gió đập cành tre<br>
        //   Chiếc thuyền anh vắng le the đợi nàng<br>
        //   Gió đánh cành bàng, gió đập cành bàng<br>
        //   Dừng chèo anh hát cô nàng ấy nghe<br>
        //   Gió đánh cành dừa, gió đập cành dừa<br>
        //   Em còn hờ hững nên chưa có chồng<br>
        //   Gió đánh cành hồng gió đập cành hồng<br>
        //   Chỉ mình em biết muốn chồng hay chưa?<br>
        //   Gió đánh cành tre, gió đập cành tre<br>
        //   Chiếc thuyền anh vắng le the đợi nàng<br>
        //   Gió đánh cành bàng, gió đập cành bàng<br>
        //   Dừng chèo em hát anh chàng ấy nghe<br>
        //   Gió đánh đò đưa, gió đập đò đưa<br>
        //   Mưa chiều ướt áo anh đưa em về thuyền<br>
        //   Gió đánh mạn thuyền gió đập mạn thuyền<br>
        //   Nhịp nhàng ta hát nơi miền trăm năm<br>
        //   Gió đánh cành tre, gió đập cành tre<br>
        //   Chiếc thuyền anh vắng le the đợi nàng<br>
        //   Gió đánh cành bàng, gió đập cành bàng<br>
        //   Dừng chèo anh hát cô nàng ấy nghe<br>
        //   Gió đánh cành dừa, gió đập cành dừa<br>
        //   Em còn hờ hững nên chưa có chồng<br>
        //   Gió đánh cành hồng gió đập cành hồng<br>
        //   Chỉ mình em biết muốn chồng hay chưa?<br>
        //   Gió đánh cành hồng, gió đập cành hồng<br>
        //   Chỉ mình em biết muốn chồng hay chưa?`,
        //   singer: "Tạ Quang Thắng - Hồng Duyên",
        //   path: "assets/music/GioDanhDoDua.mp3",
        //   image: "assets/image/anh4.jpeg",
        // },
        // {
        //   name: "Haru Haru",
        //   lyrics: `떠나가<br>
        //   Yeah<br>
        //   Finally, I realize<br>
        //   That I'm nothing without you<br>
        //   I was wrong, forgive me<br>
        //   Ah, ah, ah, ah<br>
        //   Ah-ah-ah, ah, ah, ah, ah, ah<br>
        //   Yo 君の事を思い出すよ 考えればただ悔やむの<br>
        //   心の奥底で誓った 孤独の旅立ちをこれから<br>
        //   永遠と 君が my girl oh-oh-oh<br>
        //   君だけをこれからも won't say goodbye, yeah<br>
        //   時は巻き戻せない 二人は戻れない<br>
        //   顔上げて上を向こう 受け止めて行かなきゃ<br>
        //   理由なんて何もない そう誰も悪くない<br>
        //   前向いてさぁ行こう 全て alright (oh yeah)<br>
        //   悲しめば涙が心に刺さり 何かを伝えようとしてるこの僕に<br>
        //   Don't worry! 今までの事 これからの事 忘れなんてしないよ<br>
        //   君しか僕にいないの いつまでも僕だけの my girl<br>
        //   どれだけの季節が過ぎ こんなにも君を想い<br>
        //   もう心壊れてしまえ 二度と会えないのなら<br>
        //   君の影が映る 月明かりがキレイで<br>
        //   君よ 幸せになれ haru haru あの空へ eh, eh, eh<br>
        //   Oh, girl, I cry, cry<br>
        //   You're my all, say goodbye<br>
        //   君が言うなら 全て受け入れよう<br>
        //   戻ることない日々に I say goodbye, oh<br>
        //   気づかぬフリね 二人出逢っても<br>
        //   隠さないで立ち止まらないで<br>
        //   時が経てば忘れ 時にただ身を任せて<br>
        //   僕無しでも幸せでいて そんな 願いだけ叶えたいし<br>
        //   目を閉じれば そこには君<br>
        //   隣で優しく微笑み<br>
        //   永遠と君はここにいるよ 僕の中に<br>
        //   どれだけの季節が過ぎ こんなにも君を想い<br>
        //   もう心壊れてしまえ 二度と会えないのなら<br>
        //   君が僕の分まで 微笑んでくれることで<br>
        //   君よ 幸せになれ haru haru あの空へ eh, eh, eh<br>
        //   柔らかく包み込む (あの頃の二人を)<br>
        //   忘れてしまうだろう (haru haru, say goodbye)<br>
        //   出会わなければ良かった? 苦しくて uh<br>
        //   You and I 約束は守れない だから君の為に消える<br>
        //   どれだけの季節が過ぎ こんなにも君を想い (君を想い)<br>
        //   もう心壊れてしまえ 二度と会えないのなら<br>
        //   君の影が映る (影が映る) 月明かりがキレイで<br>
        //   君よ 幸せになれ (oh) haru haru あの空へ eh, eh, eh<br>
        //   Oh, girl, I cry, cry<br>
        //   You're my all, say goodbye-bye<br>
        //   Oh, my love, don't lie, lie<br>
        //   You're my heart, say goodbye`,
        //   singer: "Big Bang",
        //   path: "assets/music/HaruHaru.mp3",
        //   image: "assets/image/anh5.jpeg",
        // },
        // {
        //   name: "Hoa Bằng Lăng",
        //   lyrics: `Nhà bên đang đón dâu rộn tiếng cười vui<br>
        //   Tôi làm thân khách đến chúc phúc mà thôi<br>
        //   Quà tôi mang đến trao chỉ mỗi hoa bằng lăng<br>
        //   Bởi mình nghèo nên chỉ đứng nép ngoài sân<br>
        //   Ôi tình xưa đã phai nay bàn tay nàng đan với ai<br>
        //   Em giờ đây nỡ quên mối tình thơ ấu<br>
        //   Thôi đành mang đớn đau cho người vui trọn đến kiếp sau<br>
        //   Riêng mình tôi ôm lấy ngàn nỗi đau<br>
        //   Tình ơi sao có câu đời lắm bể dâu<br>
        //   Nên cuộc đời nỡ lấy mất mối tình đầu<br>
        //   Tình em như bóng mây tôi nước trôi hoài thôi<br>
        //   Muôn đời tôi chỉ giữ mỗi bóng hình thôi<br>
        //   Em giờ vui áo hoa tôi nhìn em lòng đau xót xa<br>
        //   Âm thầm tôi đứng im nỗi buồn sỏi đá<br>
        //   Tôi và em chẳng xa nhưng vì tôi ngại nên đứng xa<br>
        //   Thôi đành ôm nuối tiếc một giấc mơ<br>
        //   Em giờ đây đã quên bởi vì tôi nghèo so với em<br>
        //   Bao ngày thơ đã qua chỉ là dĩ vãng<br>
        //   Thôi thì tôi chúc em duyên trầu cau đẹp đôi với nhau<br>
        //   Con đường chia hai ngã đành cách xa<br>
        //   Con đường chia hai ngã đành cách xa<br>
        //   Con đường chia hai ngã phải cách xa`,
        //   singer: "Ngân Ngân",
        //   path: "assets/music/HoaBangLang.mp3",
        //   image: "assets/image/anh6.jpeg",
        // },
        // {
        //   name: "Không Trọn Vẹn Nữa",
        //   lyrics: `Con đường hạnh phúc<br>
        //       Đôi ta từng bước qua<br>
        //       Cũng đã đến lúc<br>
        //       Kết thúc em à<br>
        //       Em đã thay đổi đã lừa dối<br>
        //       <br>
        //       Tình cảm bấy lâu<br>
        //       Có lẽ thâm tâm<br>
        //       Em chẳng muốn vậy đâu<br>
        //       Anh thấy nhớ em nhớ vòng tay<br>
        //       Nhớ khoảnh khắc từng đắm say<br>
        //       Nhớ những chiều mưa<br>

        //       <br>
        //       Vui đùa dưới mái tranh êm dịu bình yên<br>
        //       Thương em nhiều lắm<br>
        //       Thương tấm thân gầy mòn xơ xác lụi tàn<br>
        //       Thấy em đớn đau<br>
        //       Anh đâu chịu được nổi<br>
        //       Hôm qua em còn nơi đó<br>
        //       Hôm nay tan về nơi đâu<br>
        //       Anh chơi vơi giữa đêm thâu<br>
        //       Hỡi thế gian sao lắm u sầu<br>

        //       Cô ấy là cả thế giới<br>
        //       Là cả bầu trời tương lai<br>
        //       Mai này chẳng còn một ai<br>
        //       Bên cạnh anh lắng lo mỗi ngày<br>
        //       Kiếp này cho anh xin lỗi<br>
        //       Chẳng thể bước đi cùng em<br>
        //       Đi hết cuộc đời để xem<br>
        //       Mối lương duyên liệu có an bài<br>
        //       <br>
        //       Tình yêu không trọn vẹn nữa<br>
        //       Anh đem cất giấu vào tim<br>
        //       Kiếp sau có duyên gặp lại<br>
        //       Anh chẳng để lạc mất em đâu<br>
        //       Anh thấy nhớ em nhớ vòng tay<br>
        //       Nhớ khoảnh khắc từng đắm say<br>
        //       Nhớ những chiều mưa<br>
        //       <br>
        //       Vui đùa dưới mái tranh êm dịu bình yên<br>
        //       Thương em nhiều lắm<br>
        //       Thương tấm thân gầy mòn xơ xác lụi tàn<br>
        //       Thấy em đớn đau<br>
        //       Anh đâu chịu được nổi<br>
        //       <br>
        //       Hôm qua em còn nơi đó<br>
        //       Hôm nay tan về nơi đâu<br>
        //       Anh chơi vơi giữa đêm thâu<br>
        //       Hỡi thế gian sao lắm u sầu<br>
        //       Cô ấy là cả thế giới<br>
        //       <br>
        //       Là cả bầu trời tương lai<br>
        //       Mai này chẳng còn một ai<br>
        //       Bên cạnh anh lắng lo mỗi ngày<br>
        //       Kiếp này cho anh xin lỗi<br>
        //       Chẳng thể bước đi cùng em<br>
        //       Đi hết cuộc đời để xem<br>
        //       Mối lương duyên liệu có an bài<br>
        //       <br>
        //       Tình yêu không trọn vẹn nữa<br>
        //       Anh đem cất giấu vào tim<br>
        //       Kiếp sau có duyên gặp lại<br>
        //       Anh chẳng để lạc mất em đâu<br>
        //       Hôm qua em còn nơi đó<br>
        //       Hôm nay tan về nơi đâu<br>
        //       Anh chơi vơi giữa đêm thâu<br>
        //       Hỡi thế gian sao lắm u sầu<br>
        //       <br>
        //       Cô ấy là cả thế giới<br>
        //       Là cả bầu trời tương lai<br>
        //       Mai này chẳng còn một ai<br>
        //       Bên cạnh anh để lo lắng<br>
        //       Kiếp này cho anh xin lỗi<br>
        //       Chẳng thể bước đi cùng em<br>
        //       Đi hết cuộc đời để xem<br>
        //       Mối lương duyên liệu có an bài<br>
        //       <br>
        //       Tình yêu không trọn vẹn nữa<br>
        //       Anh đem cất giấu vào tim<br>
        //       Kiếp sau có duyên gặp lại<br>
        //       Anh chẳng để lạc mất em đâu<br>
        //       Kiếp sau có duyên gặp lại<br>
        //       Anh chẳng để lạc mất em đâu`,
        //   singer: "Châu Khải Phong",
        //   path: "assets/music/KhongTronVenNua-ChauKhaiPhongACV-7197914.mp3",
        //   image: "assets/image/anh7.jpeg",
        // },
        // {
        //   name: "Ngắm Hoa Lệ Rơi",
        //   lyrics: `Dẫu biết đôi ta đã từng trải qua bao nhiêu năm thiết tha yêu như vậy mà<br>
        //       Bây giờ lại xa lạ<br>
        //       Con đường tình giờ anh một mình đành lặng thinh<br>
        //       Nhìn em bước về tay cầm tay vui đùa cùng với ai<br>
        //       Ánh mắt đôi môi ta đã trót trao nhưng tại sao đến hôm nay lúc hiện tại<br>
        //       Em đã không còn được nhẫn nại<br>
        //       Bên cạnh người tình mới em đã quên rồi<br>
        //       Để anh khoác lên thân mình màu đơn côi<br>
        //       Ta đã từng hứa yêu nhau đến muôn đời sau<br>
        //       Anh vẫn luôn khắc sâu nhưng hôm nay ân tình phai màu<br>
        //       Còn gì nữa đâu và đành buông lơi những câu<br>
        //       Ta phải xa rời nhau như hoa kia dần úa màu<br>
        //       Trong lòng buồn mỗi khi anh ngắm hoa nhưng dòng lệ rơi<br>
        //       Em giờ đang khác đi, anh biết chắc chắn sẽ không còn cơ hội<br>
        //       Đành vậy thế thôi, ân tình nay vỡ đôi<br>
        //       Anh chúc em luôn nở nụ cười yên vui<br>
        //       Dẫu biết đôi ta đã từng trải qua bao nhiêu năm thiết tha yêu như vậy mà<br>
        //       Bây giờ lại xa lạ<br>
        //       Con đường tình giờ anh một mình đành lặng thinh<br>
        //       Nhìn em bước về tay cầm tay vui đùa cùng với ai<br>
        //       Ánh mắt đôi môi ta đã trót trao nhưng tại sao đến hôm nay lúc hiện tại<br>
        //       Em đã không còn được nhẫn nại<br>
        //       Bên cạnh người tình mới em đã quên rồi<br>
        //       Để anh khoác lên thân mình màu đơn côi<br>
        //       Ta đã từng hứa yêu nhau đến muôn đời sau<br>
        //       Anh vẫn luôn khắc sâu nhưng hôm nay ân tình phai màu<br>
        //       Còn gì nữa đâu và đành buông lơi những câu<br>
        //       Ta phải xa rời nhau như hoa kia dần úa màu<br>
        //       Trong lòng buồn mỗi khi anh ngắm hoa nhưng dòng lệ rơi<br>
        //       Em giờ đang khác đi, anh biết chắc chắn sẽ không còn cơ hội<br>
        //       Đành vậy thế thôi, ân tình nay vỡ đôi<br>
        //       Anh chúc em luôn nở nụ cười yên vui<br>
        //       Ta đã từng hứa yêu nhau đến muôn đời sau<br>
        //       Anh vẫn luôn khắc sâu nhưng hôm nay ân tình phai màu<br>
        //       Còn gì nữa đâu và đành buông lơi những câu<br>
        //       Ta phải xa rời nhau như hoa kia dần úa màu<br>
        //       Trong lòng buồn mỗi khi anh ngắm hoa nhưng dòng lệ rơi<br>
        //       Em giờ đang khác đi, anh biết chắc chắn sẽ không còn cơ hội<br>
        //       Đành vậy thế thôi, ân tình nay vỡ đôi<br>
        //       Anh chúc em luôn nở nụ cười yên vui<br>
        //       Anh chúc em luôn nở nụ cười yên vui`,
        //   singer: "Châu Khải Phong",
        //   path: "assets/music/NgamHoaLeRoi-ChauKhaiPhong-4850041.mp3",
        //   image: "assets/image/anh8.jpeg",
        // },
        // {
        //   name: "Ngày Chưa Giông Bão",
        //   lyrics: `Vì [Am]ta yêu nhau như cơn sóng vỗ <br>
        //   Quẩn [Em]quanh bao năm không buông mặt hồ <br>
        //   Thuyền [G]anh đi xa bờ thì em vẫn dõi chờ <br>
        //   [F]Duyên mình dịu êm thơ rất thơ <br>
        //   Và [Am]anh nâng niu em như đóa hoa <br>
        //   Còn [Em]em xem anh như trăng ngọc ngà <br>
        //   Tự [G]do như mây vàng mình phiêu du non ngàn <br>
        //   [Dm]Dẫu trần gian bao la đến đâu nơi anh là [F]nhà <br>
        //    <br>
        //   Oh oh oh oh oh [Dm]oh<br>
        //   [F]Oh oh oh oh oh [Dm]oh<br>
        //    <br>
        //   Khi anh [Am]qua thung lũng, và bóng đêm [C]ghì bàn chân, <br>
        //   Đời khiến anh [Dm]chẳng còn nhiều luyến lưu, em mong lau [F]mắt anh khô <br>
        //   Ta yêu [Am]sai hay đúng, còn thấy đau [G]là còn thương <br>
        //   Khi bão qua [Dm]rồi biết đâu sẽ... đi tới nơi của [F]ngày đầu, hết [Am]muộn sầu.<br>
        //    <br>
        //   That Arizona [Am]sky burning in your [F]eyes <br>
        //   You [C]look at me and, babe, I wanna catch on [G]fire <br>
        //   It's buried in my [Am]soul like California [F]gold <br>
        //   You [C]found the light in me that I couldn't [G]find <br>
        //    <br>
        //   So when I'm [F]all choked up But I can't find the [C]words <br>
        //   Every [Am]time we say goodbye. Baby, it [G]hurts <br>
        //   When the [F]sun [G]goes [Am]down and the [F]band [G]won't [C]play <br>
        //   I'll [F]always re [G]member us this [C]way.<br>
        //    <br>
        //   Babe<br>
        //   [F]I don't wanna be just a memory, [C]oh oh oh oh oh oh oh oh<br>
        //   Oh oh oh oh, [F]oh oh oh [G]baby, yeah.<br>
        //    <br>
        //   Khi anh [Am]qua thung lũng, và bóng đêm [C]ghì bàn chân, <br>
        //   Đời khiến anh [Dm]chẳng còn nhiều luyến lưu, em mong lau [F]mắt anh khô <br>
        //   Ta yêu [Am]sai hay đúng, còn thấy đau [G]là còn thương <br>
        //   Khi bão qua [Dm]rồi biết đâu sẽ... đi tới nơi của [F]ngày đầu, hết [Am]muộn sầu.<br>
        //    <br>
        //   Lạc [Am]bước giữa những đam mê tăm tối <br>
        //   Liệu [Em]máu vẫn nóng nơi tim bồi hồi? <br>
        //   Người [G]năm xưa đâu rồi, lạnh băng tiếng khóc cười <br>
        //   [F]Anh ở nơi xa xôi vô lối.<br>
        //    <br>
        //   That Arizona [Am]sky burning in your [F]eyes <br>
        //   You [C]look at me and, babe, I wanna catch on [G]fire <br>
        //    <br>
        //   Mặt [Am]đất níu giữ đôi chân chúng ta <br>
        //   Thì [Em]bay lên trong cơn mơ kỳ lạ <br>
        //   Ở [G]đó anh vẫn là người yêu thương chan hòa <br>
        //   [Dm]Dẫu trần gian cho anh đắng cay nơi em là [F]nhà<br>
        //    <br>
        //   When the [F]sun [G]goes [Am]down and the [F]hold [G]world [C]fades<br>
        //   I'll [F]always re [G]member us this [C]way.`,
        //   singer: "Hòa Minzy x Văn Mai Hương",
        //   path: "assets/music/NgayChuaGiongBao.mp3",
        //   image: "assets/image/anh9.jpeg",
        // },
        // {
        //   name: "Ngoài 30",
        //   lyrics: `[Verse 1]<br>
        //   Ɗù mạnh mẽ haу mềm уếu<br>
        //   Thì em vẫn cười tươi thật tươi<br>
        //   Trông như không có gì<br>
        //   Ɗù đau đớn em một mình<br>
        //   Âm thầm em giấu hết trong tim...<br>
        //   Ϲả thế giới<br>
        //   Ɛm dành hết cho người ta<br>
        //   Họ chẳng trân trọng<br>
        //   Ɲgoài ba mươi thanh xuân vẫn còn<br>
        //   Ɲhưng lối đi mòn<br>
        //   Đâu còn đường cho em...<br>
        //   [Điệp khúc]<br>
        //   Ɲửa thế giới<br>
        //   Ɛm dành cho một ai đó thôi<br>
        //   Ϲòn bao nhiêu<br>
        //   Hãу dành cho em đi nhé<br>
        //   Ɓởi thanh xuân em chẳng còn<br>
        //   Giống như em thuở trăng tròn<br>
        //   Ϲhẳng cần bận tâm cuộc sống chồng con...<br>
        //   Tấm thân em chịu đọa đàу<br>
        //   Ɲét kiêu sa xưa đâu rồi<br>
        //   Ϲuộc đời em<br>
        //   Giờ như màn đêm u tối...<br>
        //   Đớn đau em phải một mình<br>
        //   Gánh trên vai chữ gia đình<br>
        //   Ɲgoài ba mươi em chẳng có ai...<br>
        //   [Ϲoda]<br>
        //   Giờ ngoài ba mươi em chẳng còn ai<br>
        //   Ϲhẳng còn ai bên em tháng ngàу xanh<br>
        //   Tuổi mơ tuổi mộng chẳng còn<br>
        //   Một mình phải bước tiếp<br>
        //   Tự mình phải bước tiếp...<br>
        //   Hà há ha hà ha...<br>
        //   [Verse 2]<br>
        //   Ϲả thế giới<br>
        //   Ɛm dành hết cho người ta<br>
        //   Họ chẳng trân trọng<br>
        //   Ɲgoài ba mươi thanh xuân vẫn còn<br>
        //   Ɲhưng lối đi mòn<br>
        //   Đâu còn đường cho em...<br>
        //   [Điệp khúc]<br>
        //   Ɲửa thế giới<br>
        //   Ɛm dành cho một ai đó thôi<br>
        //   Ϲòn bao nhiêu<br>
        //   Hãу dành cho em đi nhé<br>
        //   Ɓởi thanh xuân em chẳng còn<br>
        //   Giống như em thuở trăng tròn<br>
        //   Ϲhẳng cần bận tâm cuộc sống chồng con...<br>
        //   Tấm thân em chịu đọa đàу<br>
        //   Ɲét kiêu sa xưa đâu rồi<br>
        //   Ϲuộc đời em<br>
        //   Giờ như màn đêm u tối...<br>
        //   Đớn đau em phải một mình<br>
        //   Gánh trên vai chữ gia đình<br>
        //   Ɲgoài ba mươi em chẳng có ai...<br>
        //   [Điệp khúc]<br>
        //   Ɲửa thế giới<br>
        //   Ɛm dành cho một ai đó thôi<br>
        //   Ϲòn bao nhiêu<br>
        //   Hãу dành cho em đi nhé<br>
        //   Ɓởi thanh xuân em chẳng còn<br>
        //   Giống như em thuở trăng tròn<br>
        //   Ϲhẳng cần bận tâm cuộc sống chồng con...<br>
        //   Tấm thân em chịu đọa đàу<br>
        //   Ɲét kiêu sa xưa đâu rồi<br>
        //   Ϲuộc đời em<br>
        //   Giờ như màn đêm u tối...<br>
        //   Đớn đau em phải một mình<br>
        //   Gánh trên vai chữ gia đình<br>
        //   Ɲgoài ba mươi em chẳng có ai...<br>
        //   [Kết thúc]<br>
        //   Đớn đau em phải một mình<br>
        //   Gánh trên vai chữ gia đình<br>
        //   Ɲgoài ba mươi em chẳng có ai...`,
        //   singer: "Thái Học - Lê Chí Trung",
        //   path: "assets/music/Ngoai30.mp3",
        //   image: "assets/image/anh10.jpeg",
        // },
        {
            name: "Ngôi Nhà Hạnh Phúc",
            lyrics: `[F]Là vì em hạnh phúc khi [G]có anh bên cạnh em [Am]<br>
      [F]Một nụ hôn thật khẽ lên đôi mắt[G] em mỗi khi buồn[C]<br>
      [F]Những điều em thầm giấu trong [G]trái tim đã lâu thật lâu[Am]<br>
      [F]Dù ngày mai ra sao [G]thì vẫn chỉ yêu người thôi[C]<br>
       <br>
      [F]Dẫu chỉ là [G]giấc mơ em xin mơ hoài[Am]<br>
      [F]Cuối con đường[G] nắng lên chờ anh đến[C]<br>
      [F]Đến khi nào [G]trên thế gian mặt trời[Em] ngừng sáng lối em đi về[Am]<br>
      [F]Ánh mắt này, [G]đôi tay này mãi thuộc về nhau.[Am]<br>
       <br>
      [F]Và nếu e muốn đi xa [G]nơi anh, [Am]gạt đi tình yêu nơi anh<br>
      [F]Bỏ qua ngày tháng cùng [G]nhau vượt qua, [C]nếu em hiểu?<br>
      [F]Rồi lúc e khóc trong vòng [G]tay anh, [Am]để <br>
      anh nhận ra là e làm ra để [F]anh mang đi theo [G]<br>
      Suốt [Am]cuộc đời…<br>
      [F]Ai cũng sẽ chỉ một [G]hạnh phúc trên [Am]dòng đường đời<br>
      [F]Và ai cũng sẽ nhận ra [G]người mình ko [C]thể quên<br>
      Thì em [F]hãy cứ đi [G] [Em]tìm một hạnh phúc [Am]mới…<br>
      [F]Tìm một người thay thế anh trong những đêm [E]....<br>
      Để anh một mình[F] nhé[G] em em [Am] cứ đi đi ,<br>
      Đập nát hết [F]ngày tháng [G]qua em cứ [C]đi đi<br>
      Vì anh đã [F]chọn về mình thế [G]thôi<br>
      [Em]Chằng thể nào đổi thay [Am]anh biết thời gian chẳng [F]thể nào<br>
      Quên đi [G]được một người… [Am]<br>
       <br>
      ***<br>
       <br>
      [F]Ai cũng sẽ chỉ một [G]hạnh phúc trên [Am]dòng đường đời<br>
      [F]Và ai cũng sẽ nhận ra [G]người mình ko [C]thể quên<br>
      Thì em [F]hãy cứ đi [G] [Em]tìm một hạnh phúc [Am]mới…<br>
      [F]Tìm một người thay thế anh trong những đêm [E]....<br>
      [F]Dẫu chỉ là [G]giấc mơ em xin mơ hoài[Am]<br>
      [F]Cuối con đường[G] nắng lên chờ anh đến[C]<br>
      [F]Đến khi nào [G]trên thế gian mặt trời[Em] ngừng sáng lối em đi về[Am]<br>
      [F]Ánh mắt này, [G]đôi tay này mãi thuộc về nhau.[Em]<br>
      Để anh một mình[F] nhé[G] em em [Am] cứ đi đi ,<br>
      Đập nát hết [F]ngày tháng [G]qua em cứ [C]đi đi<br>
      Vì anh đã [F]chọn về mình thế [G]thôi<br>
      [Em]Chằng thể nào đổi thay [Am]anh biết thời gian chẳng [F]thể nào<br>
      Quên đi [G]được một người… [Am]<br>
       <br>
      [F]Là vì em hạnh phúc khi [G]có anh bên cạnh em [Am] (4 lần)`,
            singer: "Trung Quân",
            path: "https://docs.google.com/uc?id=1naV5rLYdIt6uzzIw7gU3HkM_pmweJYH8",
            image: "assets/image/anh1.jpg",
        },
        // {
        //   name: "Người Đã Yêu Ai",
        //   lyrics: `Người đã yêu ai, em mang trao ai cả muôn ngàn lời yêu<br>
        //       Người nỡ quên anh, quên hết đi những tháng ngày bên nhau<br>
        //       Mang ước mơ bấy lâu hoá thành niềm đau<br>
        //       Phải chăng ký ức những dĩ vãng chưa phai màu<br>
        //       Người đã yêu ai, em mang trao ai hết muôn ngàn lời hứa?<br>
        //       Để dấu yêu xưa tan biến như khói sương mờ tan mau<br>
        //       Mang dấu yêu bấy lâu hoá thành niềm đau<br>
        //       Để cho ký ức vẫn cứa vết thương càng sâu<br>
        //       Tìm về góc phố đó, tình yêu vẫn còn<br>
        //       Mà sao hơi ấm thân quen nay chẳng còn bên anh?<br>
        //       Lạc giữa đêm tối<br>
        //       Cô đơn lạnh lùng<br>
        //       Nhận ra bên anh nay đã chẳng còn em<br>
        //       Cười chúc em hạnh phúc, niềm đau xé lòng<br>
        //       Tự anh bóp nát trái tim để không còn đau thêm<br>
        //       Nhìn theo người đi, ứa hoen tràn mi<br>
        //       Lặng thầm bước tiếp với nỗi nhớ riêng mình anh<br>
        //       Người đã yêu ai, em mang trao ai cả muôn ngàn lời yêu<br>
        //       Người nỡ quên anh, quên hết đi những tháng ngày bên nhau<br>
        //       Mang ước mơ bấy lâu hoá thành niềm đau<br>
        //       Phải chăng ký ức những dĩ vãng chưa phai màu<br>
        //       Người đã yêu ai, em mang trao ai hết muôn ngàn lời hứa?<br>
        //       Để dấu yêu xưa tan biến như khói sương mờ tan mau<br>
        //       Mang dấu yêu bấy lâu hoá thành niềm đau<br>
        //       Để cho ký ức vẫn cứa vết thương càng sâu<br>
        //       Cười chúc em hạnh phúc, niềm đau xé lòng<br>
        //       Tự anh bóp nát trái tim để không còn đau thêm<br>
        //       Nhìn theo người đi, ứa hoen tràn mi<br>
        //       Lặng thầm bước tiếp với nỗi nhớ riêng mình anh<br>
        //       Người đã yêu ai, em mang trao ai cả muôn ngàn lời yêu<br>
        //       Người nỡ quên anh, quên hết đi những tháng ngày bên nhau<br>
        //       Mang ước mơ bấy lâu hoá thành niềm đau<br>
        //       Phải chăng ký ức những dĩ vãng chưa phai màu<br>
        //       Người đã yêu ai, em mang trao ai hết muôn ngàn lời hứa?<br>
        //       Để dấu yêu xưa tan biến như khói sương mờ tan mau<br>
        //       Mang dấu yêu bấy lâu hoá thành niềm đau<br>
        //       Để cho ký ức vẫn cứa vết thương càng sâu<br>
        //       Người đã yêu ai, em mang trao ai cả muôn ngàn lời yêu<br>
        //       Người nỡ quên anh, quên hết đi những tháng ngày bên nhau<br>
        //       Mang ước mơ bấy lâu hoá thành niềm đau<br>
        //       Phải chăng ký ức những dĩ vãng chưa phai màu<br>
        //       Người đã yêu ai, em mang trao ai hết muôn ngàn lời hứa?<br>
        //       Để dấu yêu xưa tan biến như khói sương mờ tan mau<br>
        //       Mang dấu yêu bấy lâu hoá thành niềm đau<br>
        //       Để cho ký ức vẫn cứa vết thương càng sâu
        //       `,
        //   singer: "Châu Khải Phong",
        //   path: "assets/music/NguoiDaYeuAi-ChauKhaiPhongLuongGiaHung-3307265.mp3",
        //   image: "assets/image/anh1.jpeg",
        // },
        // {
        //   name: "Người Như Anh",
        //   lyrics: `Và rồi hôm ấy<br>
        //   Mình rời bước cách xa nhau<br>
        //   Dẫu hai ta chẳng ai giận hờn<br>
        //   Nhưng cảm giác bên nhau ngày một xa hơn<br>
        //   Lời hứa ta đã từng dành cho nhau<br>
        //   Giờ chúng ta xếp lại ngày mai sau<br>
        //   Em khóc cho bao mộng mơ<br>
        //   Anh khóc cuộc tình bơ vơ<br>
        //   Chúng ta gần nhau mà như cách xa<br>
        //   Chúng ta gần nhau mà lòng băng giá<br>
        //   Tình yêu có phải khi ta chấp nhận<br>
        //   Rời xa để thấy yêu nhau nhiều hơn<br>
        //   Anh mong rằng em sẽ có một người<br>
        //   Yêu em cùng em đến hết cuộc đời<br>
        //   Một người mới luôn khiến em vui<br>
        //   Chẳng phải như anh chỉ làm em khóc<br>
        //   Nước mắt cho em đã quá đủ rồi<br>
        //   Nỗi xót xa em nhận lấy nhiều rồi<br>
        //   Xin lỗi anh không như những gì mà em mong<br>
        //   Một người như anh<br>
        //   Và anh biết rằng nơi trái tim em còn<br>
        //   Còn mong nhớ anh từng giờ<br>
        //   Nỗi đau anh biết rằng là<br>
        //   Thật khó để mình quên đi<br>
        //   Và anh cũng<br>
        //   Chẳng làm sao để xoá đi được<br>
        //   Dù đôi lúc anh bật khóc bao đêm<br>
        //   Chẳng biết bao lâu anh quên ngày mình bên nhau<br>
        //   Anh mong rằng em sẽ có một người<br>
        //   Yêu em cùng em đến hết cuộc đời<br>
        //   Một người mới luôn khiến em vui<br>
        //   Chẳng phải như anh chỉ làm em khóc<br>
        //   Nước mắt cho em đã quá đủ rồi<br>
        //   Nỗi xót xa em nhận lấy nhiều rồi<br>
        //   Xin lỗi anh không như những gì mà em mong<br>
        //   Anh mong rằng em sẽ có một người<br>
        //   Yêu em cùng em đến hết cuộc đời<br>
        //   Một người mới luôn khiến em vui<br>
        //   Chẳng phải như anh chỉ làm em khóc<br>
        //   Nước mắt cho em đã quá đủ rồi<br>
        //   Nỗi xót xa em nhận lấy nhiều rồi<br>
        //   Xin lỗi anh không như những gì mà em mong<br>
        //   Một người như anh<br>
        //   Xin lỗi anh không như những gì mà em mong<br>
        //   Một người như anh<br>
        //   Xin lỗi anh không như những gì mà em mong<br>
        //   Một người như anh`,
        //   singer: "Mai Tiến Dũng",
        //   path: "assets/music/NguoiNhuAnh-MaiTienDung-8095883.mp3",
        //   image: "assets/image/anh2.jpeg",
        // },
        // {
        //   name: "Nỗi Đau Mình Anh",
        //   lyrics: `Cố nhắm mắt anh bước đi thật nhanh, xóa hết quá khứ em và anh<br>
        //       Dẫu cho xót xa mấy cũng đành<br>
        //       Vì bao lời em đã hứa anh chẳng còn tin nữa<br>
        //       Ta không thể về lại như lúc xưa<br>
        //       Lúc anh khốn khó nhất em ở đâu, đã nói mãi mãi luôn vì nhau<br>
        //       Cớ sao chỉ anh với nỗi sầu<br>
        //       Giờ thôi ngày vui đã hết, ân tình nay đã chết<br>
        //       Em hãy xem tình ta là dĩ vãng<br>
        //       Giờ đây đường hai ta không đi chung lối<br>
        //       Nuối tiếc mấy cũng qua rồi<br>
        //       Em ơi, quên anh đi như đã từng<br>
        //       Về với hạnh phúc bên ai<br>
        //       Về với tình yêu em chọn<br>
        //       Nhớ thương trong anh đã chết<br>
        //       Dù cho giờ đây em đi anh đau lắm<br>
        //       Nuốt nước mắt trong âm thầm<br>
        //       Nhưng anh không thể quên bao lỗi lầm<br>
        //       Nhìn em rời bước xa anh<br>
        //       Hạnh phúc sao quá mong manh<br>
        //       Đớn đau hôm nay anh giữ không thể phai mờ<br>
        //       Cố nhắm mắt anh bước đi thật nhanh, xóa hết quá khứ em và anh<br>
        //       Dẫu cho xót xa mấy cũng đành<br>
        //       Vì bao lời em đã hứa, anh chẳng còn tin nữa<br>
        //       Ta không thể về lại như lúc xưa<br>
        //       Lúc anh khốn khó nhất em ở đâu, đã nói mãi mãi luôn vì nhau<br>
        //       Cớ sao chỉ anh với nỗi sầu (cớ sao chỉ mỗi anh thôi?)<br>
        //       Giờ thôi ngày vui đã hết, ân tình nay đã chết<br>
        //       Em hãy xem tình ta là dĩ vãng<br>
        //       Giờ đây đường hai ta không đi chung lối<br>
        //       Nuối tiếc mấy cũng qua rồi<br>
        //       Em hãy quên anh đi như đã từng<br>
        //       Về với hạnh phúc bên ai<br>
        //       Về với tình yêu em chọn<br>
        //       Nhớ thương trong anh đã chết<br>
        //       Dù cho giờ đây em đi anh đau lắm<br>
        //       Nước mắt rớt trong âm thầm<br>
        //       Nhưng anh không thể quên bao lỗi lầm<br>
        //       Nhìn em rời bước xa anh<br>
        //       Hạnh phúc sao quá mong manh<br>
        //       Đớn đau hôm nay anh giữ<br>
        //       Giờ đây đường hai ta không đi chung lối<br>
        //       Nuối tiếc mấy cũng qua rồi<br>
        //       Em ơi, quên anh đi như đã từng<br>
        //       Về với hạnh phúc bên ai<br>
        //       Về với tình yêu em chọn<br>
        //       Nhớ thương trong anh đã chết<br>
        //       Dù cho giờ đây em đi anh đau lắm<br>
        //       Nuốt nước mắt trong âm thầm<br>
        //       Nhưng anh không thể quên bao lỗi lầm<br>
        //       Nhìn em rời bước xa anh<br>
        //       Hạnh phúc sao quá mong manh<br>
        //       Đớn đau hôm nay anh giữ<br>
        //       Không thể phai mờ`,
        //   singer: "Châu Khải Phong-Trịnh Đình Quang",
        //   path: "assets/music/NoiDauMinhAnh-ChauKhaiPhongTrinhDinhQuang-4361102.mp3",
        //   image: "assets/image/anh3.jpeg",
        // },
        // {
        //   name: "Stand By Me",
        //   lyrics: `Stand by me 날 바라봐줘<br>
        //   아직 사랑을 모르지만<br>
        //   Stand by me 날 지켜봐줘<br>
        //   아직 사랑에 서툴지만<br>
        //   너를 볼수록 기분이 좋아져<br>
        //   나도 몰래 노래를 불러<br>
        //   한송이 장미를 사고 싶어진<br>
        //   이런 내 모습 신기한데<br>
        //   내 마음이 너에게 닿는 듯해<br>
        //   이 세상이 아름다워<br>
        //   이런 설레임을 너도 느낀다면<br>
        //   부디 조금만 기다려줘<br>
        //   Together make it love<br>
        //   Forever make it your smile<br>
        //   너의 환한 미소 가득히<br>
        //   Together make it love<br>
        //   Forever make it your smile<br>
        //   이제 내손을 내손을 잡아<br>
        //   Whoa, stand by me 나를 바라봐줘<br>
        //   아직 사랑을 모르지만<br>
        //   Whoa, stand by me 나를 지켜봐줘<br>
        //   아직 사랑에 서툰 것 같아<br>
        //   너를 알수록 가슴이 떨려와<br>
        //   나는 그저 웃고만 있어<br>
        //   너에게 살며시 키스 해볼까<br>
        //   조금 네 맘에 다가설까<br>
        //   내 마음이 어쩌면 사랑일까<br>
        //   난 아직은 수줍은데<br>
        //   아직 한걸음도 다가 서지못한<br>
        //   나의 사랑을 기다려줘<br>
        //   Together make it love<br>
        //   Forever make it your smile<br>
        //   너의 환한 미소 가득히<br>
        //   Together make it love<br>
        //   Forever make it your smile<br>
        //   이제 조금씩 조금씩 갈게<br>
        //   Whoa, stand by me 나를 바라봐줘<br>
        //   좀 더 가까워 지고 싶어<br>
        //   Whoa, stand by me 나를 지켜봐줘<br>
        //   좀 더 멋지게 보이고 싶어<br>
        //   난 처음엔 몰랐어<br>
        //   누군갈 바라보는 게<br>
        //   아직도 내 맘 몰라<br>
        //   그대는 그대를 사랑해<br>
        //   Together make it love<br>
        //   Forever make it your smile<br>
        //   너의 환한 미소 가득히<br>
        //   Together make it love<br>
        //   Forever make it your smile<br>
        //   이제 내 손을 내 손을 잡아<br>
        //   Whoa, stand by me 나를 바라봐줘<br>
        //   사랑을 모르지만<br>
        //   Whoa, stand by me 나를 지켜봐줘<br>
        //   아직 사랑에 서툰 것 같아`,
        //   singer: "SHINee",
        //   path: "assets/music/StanByMe.mp3",
        //   image: "assets/image/anh4.jpeg",
        // },
        {
            name: "Mashup Thu Cuối - Đáp Án Cuối Cùng",
            lyrics: `Em đi xem phim một mình giữa đêm<br>
          Và đi karaoke một mình giữa đêm<br>
          Để biết em cô đơn làm sao<br>
          Để biết em nhớ anh nhường nào<br>
          Em đi Seoul một mình ngắm tuyết rơi<br>
          Và đi Bali một mình ngắm biển khơi<br>
          Để thấy em chơ vơ làm sao<br>
          Để thấy em yêu anh nhường nào<br>
          Sao mình không gạt bỏ đi hết những lời nói ngoài kia?<br>
          Sao mình không gạt bỏ đi hết những định kiến ngoài kia?<br>
          Giữa ngân hà em biết đâu là<br>
          Biết đâu là thế gian này mà<br>
          Mình bên nhau, được yêu nhau, được hôn nhau và trao nhau trái tim đậm sâu?<br>
          Giữa ngân hà em biết đâu là<br>
          Biết đâu một sớm mai khi mà<br>
          Cần bao lâu, chờ bao lâu, đợi bao lâu tình trao nhau mãi thôi đậm sâu?<br>
          Sao mình không gạt bỏ đi hết những lời nói ngoài kia?<br>
          Và sao mình không gạt bỏ đi hết những định kiến ngoài kia? (Oh-woah-oh)<br>
          Giữa ngân hà em biết đâu là<br>
          Biết đâu là thế gian này mà<br>
          Mình bên nhau, được yêu nhau, được trao nhau tình yêu sâu, trái tim đậm sâu?<br>
          Giữa ngân hà em biết đâu là<br>
          Biết đâu một sớm mai khi mà<br>
          Cần bao lâu, chờ bao lâu, đợi bao lâu tình trao nhau mãi thôi đậm sâu?<br>
          Giữa ngân hà, giữa ngân hà, giữa ngân hà<br>
          Biết đâu là, biết đâu là, biết đâu là<br>
          Hành tinh của hai chúng ta?<br>
          Một nơi của riêng chúng ta?<br>
          Giữa ngân hà, giữa ngân hà, giữa ngân hà<br>
          Biết đâu là, biết đâu là, biết đâu là<br>
          Hành tinh của hai chúng ta?<br>
          Ở một thế giới còn rất, rất xa<br>
          Anh chưa yêu em, anh chưa yêu em, anh chưa yêu em đến vậy đâu<br>
          Anh chưa thương em, anh chưa thương em, anh chưa thương em đến vậy đâu<br>
          Vậy nên, người mới buông tay dễ dàng như thế<br>
          Nhưng em yêu anh, nhưng em yêu anh, nhưng em yêu anh rất đậm sâu<br>
          Nhưng em thương anh, nhưng em thương anh, nhưng em thương anh rất đậm sâu<br>
          Vậy nên, chẳng thể buông tay dễ dàng<br>
          Giữa ngân hà, giữa ngân hà, giữa ngân hà<br>
          Biết đâu là, biết đâu là, biết đâu là<br>
          Hành tinh của hai chúng ta?<br>
          Một nơi của riêng chúng ta?<br>
          Giữa ngân hà, giữa ngân hà, giữa ngân hà<br>
          Biết đâu là, biết đâu là, biết đâu là<br>
          Hành tinh của hai chúng ta?<br>
          Ở một thế giới còn rất xa<br>
          `,
            singer: "Quân AP - Mydra",
            path: "https://docs.google.com/uc?id=1RTfF8zqRU5Udr37KtkVrzfLdgKC92G50",
            image: "assets/image/anh2.jpeg",
        },
        {
            name: "Thuyền Quyên",
            lyrics: `Xa xa bóng người thương<br>
      Thấp thoáng trước thềm nhà đang đưa dâu<br>
      Nơi đây phấn son áo màu<br>
      Em sắp theo chồng bỏ lại bến sông kia chờ mong<br>
      Khải lên khúc nhạc hoàng cầm buồn ngày mình biệt ly<br>
      Cung oán cung sầu nặng lòng tiễn chân người ra đi<br>
      Xác pháo vu quy bên thềm có chăng hạnh phúc êm đềm<br>
      Đời người con gái đục trong mười hai bến nước long đong<br>
      Dặm ngàn thiên lí tiễn người đi<br>
      Mây nước u buồn ngày biệt ly<br>
      Khóc cho duyên mình đoạn trường thương loan đò sang ngang<br>
      Áo mới em cài màu hoa cưới<br>
      Sánh bước bên người cùng duyên mới<br>
      Nâng chén tiêu sầu khải một cung đàn từ biệt nhau<br>
      Yêu nhau cởi áo cho nhau<br>
      Về nhà mẹ hỏi qua cầu gió bay<br>
      Từ nay hết duyên em trả áo<br>
      Xem như hết tình mình đã trao<br>
      Phận duyên ta lỡ cung thương đứt đoạn sầu đối gương loan<br>
      Dặm ngàn thiên lý tiễn người đi<br>
      Mây nước u buồn ngày biệt ly<br>
      Khóc cho duyên mình đoạn trường thương loan đò sang ngang<br>
      Áo mới em cài màu hoa cưới<br>
      Sánh bước bên người cùng duyên mới<br>
      Nâng chén tiêu sầu khải một cung đàn từ biệt nhau<br>
      Dặm ngàn thiên lý tiễn người đi<br>
      Mây nước u buồn ngày biệt ly<br>
      Khóc cho duyên mình đoạn trường thương loan đò sang ngang<br>
      Áo mới em cài màu hoa cưới<br>
      Sánh bước bên người cùng duyên mới<br>
      Nâng chén tiêu sầu khải một cung đàn từ biệt nhau<br>
      Bướm lượn là bướm ối ả nó bay (ối ả nó bay)<br>
      Bướm dậu là bướm ối ả nó bay (ối ả nó bay)<br>
      Cá lặn là cá ối ả nó bơi<br>
      Cá lội là cá ối ả nó bơi<br>
      `,
            singer: "Trung Quân",
            path: "https://docs.google.com/uc?id=14jZMPh7N8iKXM6Y94D2YUQuMjOiwPwgT",
            image: "assets/image/anh3.jpeg",
        },
        {
            name: "Tình Sâu Đậm, Mưa Mịt Mù",
            lyrics: `Mưa rơi rơi trên mái nhà<br>
      Từng dòng ký ức không xa lạ<br>
      Bụi thời gian dẫu có thêm phai nhoà<br>
      Thì trong em vẫn như ngày đầu<br>
      Ta từng bên nhau mặc cho bão giông<br>
      Em là dòng sông người là cơn sóng<br>
      Và thế gian chợt hoá thiên đường khi em lung linh trong mắt người<br>
      Ước mong em có thể quay lại nơi<br>
      Lúc xưa ta bên nhau chưa cách rời<br>
      Biệt khúc đó sẽ mãi như lời hứa đến suốt kiếp ta chờ nhau<br>
      Và thế gian chợt hoá thiên đường khi ta bên nhau trong tiếng cười<br>
      Có trăng non trên cao không đổi thay<br>
      Có yêu thương trong ta luôn ắp đầy<br>
      Thời gian đó sẽ mãi luôn là những mảnh ký ức xưa đẹp nhất<br>
      Trên thế gian<br>
      Mưa rơi rơi trên mái nhà<br>
      Từng dòng ký ức không xa lạ<br>
      Bụi thời gian dẫu có thêm phai nhoà<br>
      Thì trong em vẫn như ngày đầu<br>
      Ta từng bên nhau mặc cho bão giông (ta từng bên nhau)<br>
      Em là dòng sông người là cơn sóng (em là dòng sông)<br>
      Và thế gian chợt hoá thiên đường khi em lung linh trong mắt người<br>
      Ước mong em có thể quay lại nơi<br>
      Lúc xưa ta bên nhau chưa cách rời<br>
      Biệt khúc đó sẽ mãi như lời hứa đến suốt kiếp ta chờ nhau (ta chờ nhau)<br>
      Và thế gian chợt hoá thiên đường khi ta bên nhau trong tiếng cười<br>
      Có trăng non trên cao không đổi thay<br>
      Có yêu thương trong ta luôn ắp đầy<br>
      Thời gian đó sẽ mãi luôn là những mảnh ký ức xưa đẹp nhất<br>
      Trên thế gian<br>
      Và thế gian chợt hoá thiên đường khi em lung linh trong mắt người<br>
      Ước mong em có thể quay lại nơi<br>
      Lúc xưa ta bên nhau chưa cách rời<br>
      Biệt khúc đó sẽ mãi như lời hứa đến suốt kiếp ta chờ nhau (ta chờ nhau)<br>
      Và thế gian chợt hoá thiên đường khi ta bên nhau trong tiếng cười<br>
      Có trăng non trên cao không đổi thay<br>
      Có yêu thương trong ta luôn ắp đầy<br>
      Thời gian đó sẽ mãi luôn là những mảnh ký ức xưa đẹp nhất<br>
      Trên thế gian`,
            singer: "Trung Quân",
            path: "https://docs.google.com/uc?id=1SEj2g9sX8c_LmNI12k51AovBVeuacPxn",
            image: "assets/image/anh4.jpeg",
        },
        {
            name: "Tình Về Nơi Đâu",
            lyrics: `Bâng khuâng trong đêm thật dài<br>
          Ở nơi niềm vui đã xa<br>
          Tình mình như đang vô vọng<br>
          Cho ta thao thức đêm dài<br>
          Đưa nhau qua cơn mông buồn<br>
          Màn đêm càng thêm cách xa<br>
          Mình lặng im đến lúc nào<br>
          Nghe anh nghe anh đêm nay<br>
          <br>
          No more hiding, break the silents now<br>
          Do we quit or try to work things out<br>
          <br>
          Where do we go (Tình mình về đâu hỡi em)<br>
          Are we ready to just give it up<br>
          Should we turn our back on love<br>
          Or should we stand within<br>
          Chẳng đành lòng buông cánh tay<br>
          Chỉ mình anh sao biết quay lại<br>
          Ngày nào say đắm vô vàn<br>
          Sao mình xa cách nhau<br>
          Where do we go (người ơi)<br>
          Where do we go (em hỡi)<br>
          Where do we go (về đâu)<br>
          Yêu thương cho tới nơi đâu.<br>
          <br>
          If we begin on where we are<br>
          Try to mend the problems now<br>
          We've been looking forward instead of looking back<br>
          I don't wanna play it safe 'cos i wanna cross the line<br>
          Feel just like we're standing, we're running out of time<br>
          <br>
          Đừng lặng im dừng một lần thôi hơi người<br>
          Dừng lại hay sẽ cùng vượt qua giông bão<br>
          <br>
          (Do we work it out)<br>
    `,
            singer: "Ngọc Ánh Idol",
            path: "https://docs.google.com/uc?id=1khmFh2qo2ifbo5D-3ihBWthPsBlhxWNk",
            image: "assets/image/anh5.jpeg",
        },
        {
            name: "Bạn đời",
            lyrics: `[Karik]:<br>
            Kiếp trước có lẽ hai ta yêu nhau mà chẳng thể thành vợ chồng<br>
            Nghĩ thoáng lên, mai ra sao tụi mình cũng đều hài lòng<br>
            Có thể hôm nay thương, có thể tương lai buông<br>
            Có thể ta không giàu, miễn ở bên nhau vui không buồn<br>
            <br>
            Chớp mắt 20-30 chiều nao rồi tụi mình cũng về già<br>
            Ai rồi sẽ phải trước sau theo một người cùng về nhà<br>
            Bước tiếp hay quên đi, nghĩ lắm chi thêm suy<br>
            Ta cứ như bây giờ lo âu xa xôi để làm gì<br>
            <br>
            Ta yêu là yêu vậy thôi.. không có khái niệm đúng và sai<br>
            Mấy đứa hay nói lời khó nghe.. bên nhau ta bỏ ngoài tai<br>
            We drawing over night.. không ai phải nghi ngờ ai<br>
            Không quan tâm bao nhiêu lần sai<br>
            Chỉ cần em còn thương là anh vẫn ở lại<br>
            Đừng nói đến những thứ vốn quá lớn lao<br>
            Đâu ai chắc ngày mai hai ta chẳng thể bỏ nhau<br>
            Giữ tim không hoài nghi bình yên trong ta sẽ đủ lâu<br>
            Cứ vô tư biết đâu ngày sau lại vui như tình đầu<br>
            <br>
            Kiếp trước có lẽ hai ta yêu nhau mà chẳng thể thành vợ chồng<br>
            Nghĩ thoáng lên, mai ra sao tụi mình cũng đều hài lòng<br>
            Có thể hôm nay thương, có thể tương lai buông<br>
            Có thể ta không giàu, miễn ở bên nhau vui không buồn<br>
            <br>
            Chớp mắt 20-30 chiều nao rồi tụi mình cũng về già<br>
            Ai rồi sẽ phải trước sau theo một người cùng về nhà<br>
            Bước tiếp hay quên đi, nghĩ lắm chi thêm suy<br>
            Ta cứ như bây giờ lo âu xa xôi để làm gì<br>
            <br>
            Gặp gỡ trong tâm thế người dưng, chọn ở bên nhau vì bình yên<br>
            Quá khứ, hiện tại là tình nguyện.. tiếc là trên đời không gì là vĩnh viễn<br>
            Vì lời hứa không thắng nổi thời gian, trừ sự cố gắng cả hai thì có thể<br>
            Nhưng nếu phải đặt 2 từ "trách nhiệm" xuống, liệu lòng chung thuỷ có bị làm khó dễ?<br>
            Bởi chúng ta cũng chỉ là người thường, may mắn gặp và trở thành người thương<br>
            Nên anh chẳng mong gì xa xôi ngoài sự tử tế nếu lỡ 1 người buông<br>
            Dù ở lại hay là lỡ thương ai, đừng dành nửa kia lòng thương hại<br>
            Cả khi điều vẫn nghĩ là "suốt đời" hồi đáp lại rằng không có tương lai<br>
            <br>
            Khi 1 mai tụi mình nhạt nhòa, ngọt ngào theo sau chẳng được như bấy lâu<br>
            Khó đến mấy cứ nói 1 lời thật lòng rồi buông dù chỉ là mấy câu<br>
            Đừng lo cho anh sẽ thấy đau<br>
            Cười lên dù không thể lấy nhau<br>
            Cả 2 có rơi xuống đáy sâu, tương lai chẳng thấy đâu<br>
            Vẫn vui như ngày đầu<br>
            Hãy thắp sáng hết những ngày còn lại<br>
            Nếu như thời gian bên nhau không còn dài<br>
            Nếu đến ngày phải buông tay, chỉ xin đừng quên hôm nay<br>
            Đã từng biết nhau trên cõi đời này..<br>
            <br>
            Kiếp trước có lẽ 2 ta yêu nhau mà chẳng thể thành vợ chồng<br>
            Nghĩ thoáng lên mai ra sao tụi mình cũng đều hài lòng<br>
            Có thể hôm nay thương, có thể tương lai buông<br>
            Có thể ta không giàu, miễn ở bên nhau vui không buồn<br>
            <br>
            Chớp mắt 20-30 chiều nao rồi tụi mình cũng về già<br>
            Ai rồi sẽ phải trước sau theo 1 người cùng về nhà<br>
            Bước tiếp hay quên đi, nghĩ lắm chi thêm suy<br>
            Ta cứ như bây giờ lo âu xa xôi để làm gì<br>
            <br>
            [GDucky]:<br>
            Mỗi lần anh nghĩ về 2 từ bạn đời lại nở 1 nụ cười bất giác<br>
            Bởi vì anh thấy 2 từ này khó hiểu hơn cả mấy chuyện đất cát<br>
            Anh đã từng muốn được là rapper và trở thành 1 người rất khác<br>
            Nhưng anh chưa từng nghĩ là một ngày anh sẽ sợ phải mất em nhiều hơn mất rap<br>
            Bởi vì mẹ nói.. yêu có thể dễ, nhưng mà đâu dễ để con kiếm được bạn đời<br>
            Chung sống bên nhau, sinh con, đẻ cái, trăm năm thì đâu có thể là chuyện tạm thời<br>
            Anh bắt đầu lo, khi em bước tới và làm anh muốn rước về làm dâu cả đời<br>
            Nhưng mà anh đúng hay anh sai trong chuyện đó thì chị "Tiên" bảo là thời gian mới biết câu trả lời<br>
            Nên em ơi em.. em luôn rất yên bình, thật là xinh và thích thêu thùa<br>
            Không như tôi.. luôn thô ráp bên ngoài và gặp ai cũng muốn trêu đùa<br>
            Vậy là sao! 1 người gầy và 1 người cao..<br>
            1 người quen buông lời cay đắng lại va vào ngay 1 người ngọt ngào<br>
            Thế giới có thể đánh giá 2 đứa rất khác nhau, nhưng như vậy không đúng<br>
            Bởi vì tôi chỉ muốn thấy em, sau khi gặp công chúng<br>
            Có những lúc tôi như muốn phát điên, em không hề than phiền<br>
            Nắm lấy cánh tay tôi đang run lên và trao tôi nụ cười ngoan hiền..<br>
            That's why I love this girl.. can you see?<br>
            That's why I love this girl.. can you see?<br>
            Baby you love your man.. I can see!<br>
            That we are meant to be.. meant to be<br>
            <br>
            Chớp mắt 20-30 chiều nao rồi tụi mình cũng về già<br>
            Ai rồi sẽ phải trước sau theo 1 người cùng về nhà`,
            singer: "Karik - GDucky",
            path: "https://docs.google.com/uc?id=1uWrYeUCGrGnHpwk8rKYBMCD2tpkKvPiX",
            image: "assets/image/anh6.jpeg",
        },
    ],
    setConfig: function (key, value) {
        this.config[key] = value;
        // (2/2) Uncomment the line below to use localStorage
        localStorage.setItem(PlAYER_STORAGE_KEY, JSON.stringify(this.config));
    },
    render: function () {
        const htmls = this.songs.map((song, index) => {
            return `
                    <div class="song ${
                        index === this.currentIndex ? "active" : ""
                    }" data-index="${index}">
                        <div
                            class="thumb"
                            style="
                            background-image: url('${song.image}');
                            "
                        ></div>
                        <div class="body">
                            <h3 class="title">${song.name}</h3>
                            <p class="author">${song.singer}</p>
                        </div>
                        <div class="option">
                            <i class="fas fa-ellipsis-h"></i>
                        </div>
                    </div>
                `;
        });
        playlist.innerHTML = htmls.join("");
        // const lyricItem = this.songs.map((song, index) => {
        //     return `
        //             <p>${song.lyrics}</p>
        //           `;
        // });
        // lyric.innerHTML = lyricItem.join("");
    },
    defineProperties: function () {
        Object.defineProperty(this, "currentSong", {
            get: function () {
                return this.songs[this.currentIndex];
            },
        });
    },
    handleEvents: function () {
        const _this = this;
        const cdWidth = cd.offsetWidth;

        // Xử lý CD quay / dừng
        // Handle CD spins / stops
        const cdThumbAnimate = cdThumb.animate(
            [{ transform: "rotate(360deg)" }],
            {
                duration: 20000, // 10 seconds
                iterations: Infinity,
            }
        );
        cdThumbAnimate.pause();

        // Xử lý phóng to / thu nhỏ CD
        // Handles CD enlargement / reduction
        // document.onscroll = function () {
        //   const scrollTop = window.scrollY || document.documentElement.scrollTop;
        //   const newCdWidth = cdWidth - scrollTop;

        //   cd.style.width = newCdWidth > 0 ? newCdWidth + "px" : 0;
        //   cd.style.opacity = newCdWidth / cdWidth;
        // };

        // Xử lý khi click play
        // Handle when click play
        playBtn.onclick = function () {
            if (_this.isPlaying) {
                audio.pause();
            } else {
                audio.play();
            }
        };

        // Khi song được play
        // When the song is played
        audio.onplay = function () {
            _this.isPlaying = true;
            player.classList.add("playing");
            cdThumbAnimate.play();
        };

        // Khi song bị pause
        // When the song is pause
        audio.onpause = function () {
            _this.isPlaying = false;
            player.classList.remove("playing");
            cdThumbAnimate.pause();
        };

        // Khi tiến độ bài hát thay đổi
        // When the song progress changes
        audio.ontimeupdate = function () {
            if (audio.duration) {
                const progressPercent = Math.floor(
                    (audio.currentTime / audio.duration) * 100
                );
                progress.value = progressPercent;
            }
        };

        // Xử lý khi tua song
        // Handling when seek
        progress.onchange = function (e) {
            const seekTime = (audio.duration / 100) * e.target.value;
            audio.currentTime = seekTime;
        };

        // Khi next song
        // When next song
        nextBtn.onclick = function () {
            if (_this.isRandom) {
                _this.playRandomSong();
            } else {
                _this.nextSong();
            }
            audio.play();
            _this.render();
            _this.scrollToActiveSong();
        };

        // Khi prev song
        // When prev song
        prevBtn.onclick = function () {
            if (_this.isRandom) {
                _this.playRandomSong();
            } else {
                _this.prevSong();
            }
            audio.play();
            _this.render();
            _this.scrollToActiveSong();
        };

        // Xử lý bật / tắt random song
        // Handling on / off random song
        randomBtn.onclick = function (e) {
            _this.isRandom = !_this.isRandom;
            _this.setConfig("isRandom", _this.isRandom);
            randomBtn.classList.toggle("active", _this.isRandom);
        };

        // Xử lý lặp lại một song
        // Single-parallel repeat processing
        repeatBtn.onclick = function (e) {
            _this.isRepeat = !_this.isRepeat;
            _this.setConfig("isRepeat", _this.isRepeat);
            repeatBtn.classList.toggle("active", _this.isRepeat);
        };

        // Xử lý next song khi audio ended
        // Handle next song when audio ended
        audio.onended = function () {
            if (_this.isRepeat) {
                audio.play();
            } else {
                nextBtn.click();
            }
        };

        // Lắng nghe hành vi click vào playlist
        // Listen to playlist clicks
        playlist.onclick = function (e) {
            const songNode = e.target.closest(".song:not(.active)");

            if (songNode || e.target.closest(".option")) {
                // Xử lý khi click vào song
                // Handle when clicking on the song
                if (songNode) {
                    _this.currentIndex = Number(songNode.dataset.index);
                    _this.loadCurrentSong();
                    _this.render();
                    audio.play();
                }

                // Xử lý khi click vào song option
                // Handle when clicking on the song option
                if (e.target.closest(".option")) {
                }
            }
        };
    },
    scrollToActiveSong: function () {
        setTimeout(() => {
            $(".song.active").scrollIntoView({
                behavior: "smooth",
                block: "nearest",
            });
        }, 300);
    },
    loadCurrentSong: function () {
        heading.textContent = this.currentSong.name;
        imgPlayer.src = this.currentSong.image;
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
        audio.src = this.currentSong.path;
        lyric.innerHTML = this.currentSong.lyrics;
    },
    loadConfig: function () {
        this.isRandom = this.config.isRandom;
        this.isRepeat = this.config.isRepeat;
    },
    nextSong: function () {
        this.currentIndex++;
        if (this.currentIndex >= this.songs.length) {
            this.currentIndex = 0;
        }
        this.loadCurrentSong();
    },
    prevSong: function () {
        this.currentIndex--;
        if (this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1;
        }
        this.loadCurrentSong();
    },
    playRandomSong: function () {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * this.songs.length);
        } while (newIndex === this.currentIndex);

        this.currentIndex = newIndex;
        this.loadCurrentSong();
    },
    start: function () {
        // Gán cấu hình từ config vào ứng dụng
        // Assign configuration from config to application
        this.loadConfig();

        // Định nghĩa các thuộc tính cho object
        // Defines properties for the object
        this.defineProperties();

        // Lắng nghe / xử lý các sự kiện (DOM events)
        // Listening / handling events (DOM events)
        this.handleEvents();

        // Tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
        // Load the first song information into the UI when running the app
        this.loadCurrentSong();

        // Render playlist
        this.render();

        // Hiển thị trạng thái ban đầu của button repeat & random
        // Display the initial state of the repeat & random button
        randomBtn.classList.toggle("active", this.isRandom);
        repeatBtn.classList.toggle("active", this.isRepeat);
    },
};

app.start();

var homeButton = document.querySelectorAll(".btn-home");
var listButton = document.querySelectorAll(".btn-list");
var lyricButton = document.querySelectorAll(".btn-lyrics");

var listContainer = document.querySelector(".list-container");
var lyricss = document.querySelector(".lyrics");
var playerss = document.querySelector(".player");

homeButton.forEach(function (e) {
    e.onclick = function () {
        listContainer.classList.add("dn");
        lyricss.classList.add("dn");
        playerss.classList.remove("dn");
    };
});

listButton.forEach(function (e) {
    e.onclick = function () {
        lyricss.classList.add("dn");
        playerss.classList.add("dn");
        listContainer.classList.remove("dn");
    };
});

lyricButton.forEach(function (e) {
    e.onclick = function () {
        playerss.classList.add("dn");
        listContainer.classList.add("dn");
        lyricss.classList.remove("dn");
    };
});
