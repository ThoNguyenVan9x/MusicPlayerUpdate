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
    {
      name: "Aloha",
      lyrics: `어두운 불빛아래 촛불 하나
      와인 잔에 담긴 약속하나
      항상 너의 곁에서 널 지켜줄거야
      날 믿어준 너였잖아
      나 바라는 건 오직 하나
      영원한 행복을 꿈꾸지만
      화려하지 않아도 꿈같진 않아도
      너만 있어주면 돼
      걱정 마 (I believe)
      언제나 (I believe)
      이 순간을 잊지 않을게
      내 품에 (I believe)
      안긴 너의 미소가
      영원히 빛을 잃어 가지 않게
      'Cause your love is so sweet
      You are my everything
      첫날 밤에 단 꿈에 젖어
      하는 말이 아냐 난 변하지 않아
      오직 너만 바라볼거야 oh
      You're light of my life
      You are the one in my life
      내 모든걸 다 잃는데도
      후회하지 않아
      오직 너를 위한
      변하지 않는 사랑으로
      나 바라는 건 오직 하나
      영원한 행복을 꿈꾸지만
      화려하지 않아도 꿈같진 않아도
      너만 있어주면 돼
      약속해 (I believe)
      힘들 땐 (I believe)
      너의 그늘이 되어줄게
      내품에 (I believe)
      안긴 너의 미소가
      영원히 빛을 잃어 가지 않게
      'Cause your love is so sweet
      You are my everything
      첫날 밤에 단 꿈에 젖어
      하는 말이 아냐 난 변하지 않아
      오직 너만 바라볼거야 oh
      You're light of my life
      You are the one in my life
      내 모든걸 다 잃는데도
      후회하지 않아
      오직 너를 위한
      변하지 않는 사랑으로
      You're light of my life
      You are the one in my life
      내 모든걸 다 잃는데도
      후회하지 않아
      오직 너를 위한
      변하지 않는 사랑으로
      All I ever want is your love`,
      singer: "Cool",
      path: "assets/music/Aloha.mp3",
      image: "assets/image/anh0.jpg",
    },
    {
      name: "À Lôi",
      lyrics: `Tại vì thích em nhiều quá nhưng em lại nói là "à lôi"
          Cũng định solo Hiphop cùng với trai bản nhưng mà thôi
          Anh gửi vào trong câu rap cho em dính cả thính, cả mồi
          Nhà em có mấy quả đồi, ừ thì anh cũng tính cả rồi
          Tại vì thích em nhiều quá nhưng em lại nói là "à lôi" (à lôi noọng)
          Cũng định solo Hiphop cùng với trai bản nhưng mà thôi
          Anh gửi vào trong câu rap cho em dính cả thính cả mồi
          Nhà em có tới mấy quả đồi ừ thì anh cũng tính cả rồi (à lôi noọng)
          Gặp em ở thung lũng, ném quả còn lên không trung
          Anh bận đi tìm cảm hứng trong chuỗi ngày bị mông lung
          Anh cầm trên tay cây nỏ, ngắm vào tâm nhưng không trúng
          Nhưng mà lỡ bị em gây thương nhớ, bắn vào tim mà không súng
          Trai bản em chơi đàn tính, còn anh thì gẩy guitar
          Anh thì không biết múa khèn nhưng mà giỏi quẩy Vina
          Yêu em mấy núi cũng trèo mặc dù không giỏi đi xa
          Anh lại còn giỏi cả thi ca, biến homestay bản thành villa
          Tấm lòng anh không phải thú dữ, không cần mổ bụng thì mới được xem
          Mấy anh thanh niên trong bản phải biết uống rượu mới tán được em
          Nhà sàn của em sẵn bậc nhưng nàng đồng ý mới có đường lên
          Anh thì số vốn đen đủi không biết lần này liệu có được hên
          Ừ thì noọng ơi, à lôi
          Hai chúng mình thì cùng đẹp nết, đẹp cả đôi
          Hội trai bản để anh dẹp hết, chấp cả hội
          Trồng cây kín cả quả đồi, xong dắt em đi về nhà thôi
          Ơi nọong ơi, ơi nọong ơi
          Thương em mấy núi cũng trèo, mấy sông cũng lội, mấy đèo cũng qua
          Nhà em ở ngay lưng đồi, nếu như có dịp mời chàng tới chơi
          Tại vì thích em nhiều quá nhưng em lại nói là "à lôi"
          Cũng định solo Hiphop cùng với trai bản nhưng mà thôi
          Anh gửi vào trong câu rap cho em dính cả thính, cả mồi
          Nhà em có mấy quả đồi, ừ thì anh cũng tính cả rồi
          Tại vì thích em nhiều quá nhưng em lại nói là "à lôi" (à lôi noọng)
          Cũng định solo Hiphop cùng với trai bản nhưng mà thôi
          Anh gửi vào trong câu rap cho em dính cả thính, cả mồi
          Nhà em có tới mấy quả đồi, ừ thì anh cũng tính cả rồi
          À lôi
          Một, hai, ba, yeah, nơng, thoong, tham
          Đây là người miền núi phía Bắc Việt Nam (Việt Nam)
          Hiên ngang, không thích luồn cúi (hiên ngang)
          Flexing theo kiểu miền núi (flex, flex)
          Ta chơi nhạc Trap, Hiphop trên bản làng
          Bản này là bản chất, biến từ đất thành bản vàng
          Từ những ngày khó khăn, các dân tộc còn tản mạn
          Đến ngày chung tay cùng làm kinh tế, tiền chất đống như tải hàng
          Và ta đi lên từ bàn tay trắng (từ bàn tay trắng)
          Cần cù chịu khó, không nhờ may mắn (không nhờ may mắn)
          Trải qua khó khăn một mưa hai nắng (một mưa hai nắng)
          Người biết khiêm tốn là người hay thắng
          À lôi, à lôi
          Người miền núi chất nói à lôi, à lôi
          Hiền lành nhưng chiến như gà chọi, gà chọi
          Ở đây hay nói là à lôi, mọi người thường nói là à lôi
          À lôi, à lôi
          Người miền núi chất nói à lôi, à lôi
          Hiền lành nhưng chiến như gà chọi
          Ở đây hay nói là à lôi, mọi người thường nói là à lôi (à lôi)`,
      singer: "Double2T",
      path: "./assets/music/ALoi-Double2TMasew-10119691.mp3",
      image: "assets/image/anh1.jpeg",
    },
    {
      name: "Chờ Ngày Cưới EM",
      lyrics: `Chờ đợi em bấy lâu nay để kêu anh bằng chồng
      Trọn đời anh hứa sẽ không hai lòng
      Kết thông gia hai nhà ta, tùng dinh tùng dinh qua rước dâu
      Bằng lòng anh sang anh mang bưng theo cau trầu
      
      Mãi mãi không đổi thay, tình này nguyện trao em đắm say
      Cưới em về sẽ không bao giờ để em khóc
      Nếu như một ngày em buồn, anh sẽ làm cả bầu trời
      Để cho em thấy không chơi vơi
      
      
      VER 1:
      
      Cuộc đời kín cói khiến lắm lúc thăng trầm mỗi tối
      Chỉ ước mong sao để mau được giàu lên
      Nhờ người mai mối để rước em về mỗi tối
      Nằm cạnh bên em để kêu em vợ ơi
      
      Bởi quá thương em nên anh ráng sang năm
      Mần ăn nên anh hốt em về làm dâu
      Chút yêu thương thêm chút mê say
      Làm lòng em chắc chắn sẽ là ngất ngây
      
      Chờ đợi em bấy lâu nay để kêu anh bằng chồng
      Trọn đời anh hứa sẽ không hai lòng
      Kết thông gia hai nhà ta, tùng dinh tùng dinh qua rước dâu
      Bằng lòng anh sang anh mang bưng theo cau trầu
      
      Mãi mãi không đổi thay, tình này nguyện trao em đắm say
      Cưới em về sẽ không bao giờ để em khóc
      Nếu như một ngày em buồn, anh sẽ làm cả bầu trời
      Để cho em thấy không chơi vơi
      
      RAP:
      
      Rước con dâu hiền ngoan, để rồi pháo hoa theo tràn lan
      Rượu mừng uống cho sang thiệt sang, họ hàng chúc cho ta rùm rang
      Lòng mừng vì có em bên đời anh, cùng nhau mình sánh bạc mái đầu xanh
      Hẹn lòng nguyện ước trăm năm thành đôi, giờ mình cùng tính đi ôi dồi ôi vô rồi
      
      VER 2:
      
      Bởi quá thương em nên anh ráng sang năm
      Mần ăn nên anh hốt em về làm dâu
      Chút yêu thương thêm chút mê say
      Làm lòng em chắc chắn sẽ là ngất ngây
      
      Chờ đợi em bấy lâu nay để kêu anh bằng chồng
      Trọn đời anh hứa sẽ không hai lòng
      Kết thông gia hai nhà ta, tùng dinh tùng dinh qua rước dâu
      Bằng lòng anh sang anh mang bưng theo cau trầu
      
      Mãi mãi không đổi thay, tình này nguyện trao em đắm say
      Cưới em về sẽ không bao giờ để em khóc
      Nếu như một ngày em buồn, anh sẽ làm cả bầu trời
      Để cho em thấy không chơi vơi
      
      Hương Ly:
      Thương anh mấy núi em cũng trèo, mấy sông em cũng lội, mấy đèo em cũng qua
      Thương anh cái tính anh thật thà, trai quê mà chân chất mượt mà sao dễ thương`,
      singer: "Phát Hồ - Hương Ly",
      path: "assets/music/ChoNgayCuoiEm.mp3",
      image: "assets/image/anh2.jpeg",
    },
    {
      name: "Cô Đơn Trên Sofa",
      lyrics: `Cô đơn trên sofa con tim như tan ra
            Dẫn lối em trôi theo một khúc ca buồn
            Giữa căn phòng ánh đèn chợt tắt
            Che đi giọt buồn sắp rơi
            Cô đơn trên sofa sao anh yêu cô ta
            Chẳng phải anh yêu em hơn cả anh mà
            Để cho thanh xuân này chợt tắt
            Trên mi giọt nước mắt rơi
            Thì ra là thế tình nào là tình chẳng mờ phai tháng năm
            Một ngày vẫn trôi đôi môi em phai màu nắng
            Nếu không em thì anh có buồn
            Hoá ra chỉ mình em đáng thương
            Đừng buông lời hứa rồi lại vờ rằng dường như anh đã quên
            Đừng tìm đến em gieo tương tư xong lại đi
            Nắng xuyên qua hàng mi rối bời
            Giữ tim em vài giây cuối thôi
            Để em được ngã lưng lên một chiếc sofa
            Để nghe một phút tim yên bình đến kỳ lạ
            Để em được sống vô tư như một bông hoa
            Giữa bầu trời kiêu sa
            Cho em thôi miệt mài nghĩ suy
            Người ơi hãy nói em nghe một lý do đi
            Vì sao lại để em vương sầu trên khoé mi
            Vì sao lại biến cô đơn thành giông tố
            Nỗi buồn sóng vỗ
            Tâm hồn em trôi lênh đênh trong căn phòng
            Rồi lại rơi xuống trên sofa
            Rồi lại rơi xuống trên sofa
            Rồi lại rơi xuống trên sofa
            Rồi lại rơi xuống trên sofa
            Cô đơn trên sofa sao anh yêu cô ta
            Chẳng phải anh yêu em hơn cả anh mà
            Để cho thanh xuân này chợt tắt
            Trên mi giọt nước mắt rơi
            Thì ra là thế tình nào là tình chẳng mờ phai tháng năm
            Một ngày vẫn trôi đôi môi em phai màu nắng
            Nếu không em thì anh có buồn
            Hoá ra chỉ mình em đáng thương
            Đừng buông lời hứa rồi lại vờ rằng dường như anh đã quên
            Đừng tìm đến em gieo tương tư xong lại đi
            Nắng xuyên qua hàng mi rối bời
            Giữ tim em vài giây cuối thôi
            Để em được ngã lưng lên một chiếc sofa
            Để nghe một phút tim yên bình đến kỳ lạ
            Để em được sống vô tư như một bông hoa
            Giữa bầu trời kiêu sa
            Cho em thôi miệt mài nghĩ suy
            Người ơi hãy nói em nghe một lý do đi
            Vì sao lại để em vương sầu trên khoé mi
            Vì sao lại biến cô đơn thành giông tố
            Nỗi buồn sóng vỗ
            Tâm hồn em trôi lênh đênh trong căn phòng`,
      singer: "Trung Quân",
      path: "assets/music/CoDonTrenSofaLiveCoverAtSoulOfTheForest-TrungQuanIdol-8520175.mp3",
      image: "assets/image/anh3.jpeg",
    },
    {
      name: "Gió Đánh Đò Đưa",
      lyrics: `Gió đánh cành tre, gió đập cành tre
      Chiếc thuyền anh vắng le the đợi nàng
      Gió đánh cành bàng, gió đập cành bàng
      Dừng chèo anh hát cô nàng ấy nghe
      Gió đánh cành dừa, gió đập cành dừa
      Em còn hờ hững nên chưa có chồng
      Gió đánh cành hồng gió đập cành hồng
      Chỉ mình em biết muốn chồng hay chưa?
      Gió đánh cành tre, gió đập cành tre
      Chiếc thuyền anh vắng le the đợi nàng
      Gió đánh cành bàng, gió đập cành bàng
      Dừng chèo em hát anh chàng ấy nghe
      Gió đánh đò đưa, gió đập đò đưa
      Mưa chiều ướt áo anh đưa em về thuyền
      Gió đánh mạn thuyền gió đập mạn thuyền
      Nhịp nhàng ta hát nơi miền trăm năm
      Gió đánh cành tre, gió đập cành tre
      Chiếc thuyền anh vắng le the đợi nàng
      Gió đánh cành bàng, gió đập cành bàng
      Dừng chèo anh hát cô nàng ấy nghe
      Gió đánh cành dừa, gió đập cành dừa
      Em còn hờ hững nên chưa có chồng
      Gió đánh cành hồng gió đập cành hồng
      Chỉ mình em biết muốn chồng hay chưa?
      Gió đánh cành hồng, gió đập cành hồng
      Chỉ mình em biết muốn chồng hay chưa?`,
      singer: "Tạ Quang Thắng - Hồng Duyên",
      path: "assets/music/GioDanhDoDua.mp3",
      image: "assets/image/anh4.jpeg",
    },
    {
      name: "Haru Haru",
      lyrics: `떠나가
      Yeah
      Finally, I realize
      That I'm nothing without you
      I was wrong, forgive me
      Ah, ah, ah, ah
      Ah-ah-ah, ah, ah, ah, ah, ah
      Yo 君の事を思い出すよ 考えればただ悔やむの
      心の奥底で誓った 孤独の旅立ちをこれから
      永遠と 君が my girl oh-oh-oh
      君だけをこれからも won't say goodbye, yeah
      時は巻き戻せない 二人は戻れない
      顔上げて上を向こう 受け止めて行かなきゃ
      理由なんて何もない そう誰も悪くない
      前向いてさぁ行こう 全て alright (oh yeah)
      悲しめば涙が心に刺さり 何かを伝えようとしてるこの僕に
      Don't worry! 今までの事 これからの事 忘れなんてしないよ
      君しか僕にいないの いつまでも僕だけの my girl
      どれだけの季節が過ぎ こんなにも君を想い
      もう心壊れてしまえ 二度と会えないのなら
      君の影が映る 月明かりがキレイで
      君よ 幸せになれ haru haru あの空へ eh, eh, eh
      Oh, girl, I cry, cry
      You're my all, say goodbye
      君が言うなら 全て受け入れよう
      戻ることない日々に I say goodbye, oh
      気づかぬフリね 二人出逢っても
      隠さないで立ち止まらないで
      時が経てば忘れ 時にただ身を任せて
      僕無しでも幸せでいて そんな 願いだけ叶えたいし
      目を閉じれば そこには君
      隣で優しく微笑み
      永遠と君はここにいるよ 僕の中に
      どれだけの季節が過ぎ こんなにも君を想い
      もう心壊れてしまえ 二度と会えないのなら
      君が僕の分まで 微笑んでくれることで
      君よ 幸せになれ haru haru あの空へ eh, eh, eh
      柔らかく包み込む (あの頃の二人を)
      忘れてしまうだろう (haru haru, say goodbye)
      出会わなければ良かった? 苦しくて uh
      You and I 約束は守れない だから君の為に消える
      どれだけの季節が過ぎ こんなにも君を想い (君を想い)
      もう心壊れてしまえ 二度と会えないのなら
      君の影が映る (影が映る) 月明かりがキレイで
      君よ 幸せになれ (oh) haru haru あの空へ eh, eh, eh
      Oh, girl, I cry, cry
      You're my all, say goodbye-bye
      Oh, my love, don't lie, lie
      You're my heart, say goodbye`,
      singer: "Big Bang",
      path: "assets/music/HaruHaru.mp3",
      image: "assets/image/anh5.jpeg",
    },
    {
      name: "Hoa Bằng Lăng",
      lyrics: `Nhà bên đang đón dâu rộn tiếng cười vui
      Tôi làm thân khách đến chúc phúc mà thôi
      Quà tôi mang đến trao chỉ mỗi hoa bằng lăng
      Bởi mình nghèo nên chỉ đứng nép ngoài sân
      Ôi tình xưa đã phai nay bàn tay nàng đan với ai
      Em giờ đây nỡ quên mối tình thơ ấu
      Thôi đành mang đớn đau cho người vui trọn đến kiếp sau
      Riêng mình tôi ôm lấy ngàn nỗi đau
      Tình ơi sao có câu đời lắm bể dâu
      Nên cuộc đời nỡ lấy mất mối tình đầu
      Tình em như bóng mây tôi nước trôi hoài thôi
      Muôn đời tôi chỉ giữ mỗi bóng hình thôi
      Em giờ vui áo hoa tôi nhìn em lòng đau xót xa
      Âm thầm tôi đứng im nỗi buồn sỏi đá
      Tôi và em chẳng xa nhưng vì tôi ngại nên đứng xa
      Thôi đành ôm nuối tiếc một giấc mơ
      Em giờ đây đã quên bởi vì tôi nghèo so với em
      Bao ngày thơ đã qua chỉ là dĩ vãng
      Thôi thì tôi chúc em duyên trầu cau đẹp đôi với nhau
      Con đường chia hai ngã đành cách xa
      Con đường chia hai ngã đành cách xa
      Con đường chia hai ngã phải cách xa`,
      singer: "Ngân Ngân",
      path: "assets/music/HoaBangLang.mp3",
      image: "assets/image/anh6.jpeg",
    },
    {
      name: "Không Trọn Vẹn Nữa",
      lyrics: `Con đường hạnh phúc
          Đôi ta từng bước qua
          Cũng đã đến lúc
          Kết thúc em à
          Em đã thay đổi đã lừa dối
          
          Tình cảm bấy lâu
          Có lẽ thâm tâm
          Em chẳng muốn vậy đâu
          Anh thấy nhớ em nhớ vòng tay
          Nhớ khoảnh khắc từng đắm say
          Nhớ những chiều mưa
          
          
          Vui đùa dưới mái tranh êm dịu bình yên
          Thương em nhiều lắm
          Thương tấm thân gầy mòn xơ xác lụi tàn
          Thấy em đớn đau
          Anh đâu chịu được nổi
          Hôm qua em còn nơi đó
          Hôm nay tan về nơi đâu
          Anh chơi vơi giữa đêm thâu
          Hỡi thế gian sao lắm u sầu
          
          Cô ấy là cả thế giới
          Là cả bầu trời tương lai
          Mai này chẳng còn một ai
          Bên cạnh anh lắng lo mỗi ngày
          Kiếp này cho anh xin lỗi
          Chẳng thể bước đi cùng em
          Đi hết cuộc đời để xem
          Mối lương duyên liệu có an bài
          
          Tình yêu không trọn vẹn nữa
          Anh đem cất giấu vào tim
          Kiếp sau có duyên gặp lại
          Anh chẳng để lạc mất em đâu
          Anh thấy nhớ em nhớ vòng tay
          Nhớ khoảnh khắc từng đắm say
          Nhớ những chiều mưa
          
          Vui đùa dưới mái tranh êm dịu bình yên
          Thương em nhiều lắm
          Thương tấm thân gầy mòn xơ xác lụi tàn
          Thấy em đớn đau
          Anh đâu chịu được nổi
          
          Hôm qua em còn nơi đó
          Hôm nay tan về nơi đâu
          Anh chơi vơi giữa đêm thâu
          Hỡi thế gian sao lắm u sầu
          Cô ấy là cả thế giới
          
          Là cả bầu trời tương lai
          Mai này chẳng còn một ai
          Bên cạnh anh lắng lo mỗi ngày
          Kiếp này cho anh xin lỗi
          Chẳng thể bước đi cùng em
          Đi hết cuộc đời để xem
          Mối lương duyên liệu có an bài
          
          Tình yêu không trọn vẹn nữa
          Anh đem cất giấu vào tim
          Kiếp sau có duyên gặp lại
          Anh chẳng để lạc mất em đâu
          Hôm qua em còn nơi đó
          Hôm nay tan về nơi đâu
          Anh chơi vơi giữa đêm thâu
          Hỡi thế gian sao lắm u sầu
          
          Cô ấy là cả thế giới
          Là cả bầu trời tương lai
          Mai này chẳng còn một ai
          Bên cạnh anh để lo lắng
          Kiếp này cho anh xin lỗi
          Chẳng thể bước đi cùng em
          Đi hết cuộc đời để xem
          Mối lương duyên liệu có an bài
          
          Tình yêu không trọn vẹn nữa
          Anh đem cất giấu vào tim
          Kiếp sau có duyên gặp lại
          Anh chẳng để lạc mất em đâu
          Kiếp sau có duyên gặp lại
          Anh chẳng để lạc mất em đâu`,
      singer: "Tạ Quang Thắng - Hồng Duyên",
      path: "assets/music/KhongTronVenNua-ChauKhaiPhongACV-7197914.mp3",
      image: "assets/image/anh7.jpeg",
    },
    {
      name: "Ngắm Hoa Lệ Rơi",
      lyrics: `Dẫu biết đôi ta đã từng trải qua bao nhiêu năm thiết tha yêu như vậy mà
          Bây giờ lại xa lạ
          Con đường tình giờ anh một mình đành lặng thinh
          Nhìn em bước về tay cầm tay vui đùa cùng với ai
          Ánh mắt đôi môi ta đã trót trao nhưng tại sao đến hôm nay lúc hiện tại
          Em đã không còn được nhẫn nại
          Bên cạnh người tình mới em đã quên rồi
          Để anh khoác lên thân mình màu đơn côi
          Ta đã từng hứa yêu nhau đến muôn đời sau
          Anh vẫn luôn khắc sâu nhưng hôm nay ân tình phai màu
          Còn gì nữa đâu và đành buông lơi những câu
          Ta phải xa rời nhau như hoa kia dần úa màu
          Trong lòng buồn mỗi khi anh ngắm hoa nhưng dòng lệ rơi
          Em giờ đang khác đi, anh biết chắc chắn sẽ không còn cơ hội
          Đành vậy thế thôi, ân tình nay vỡ đôi
          Anh chúc em luôn nở nụ cười yên vui
          Dẫu biết đôi ta đã từng trải qua bao nhiêu năm thiết tha yêu như vậy mà
          Bây giờ lại xa lạ
          Con đường tình giờ anh một mình đành lặng thinh
          Nhìn em bước về tay cầm tay vui đùa cùng với ai
          Ánh mắt đôi môi ta đã trót trao nhưng tại sao đến hôm nay lúc hiện tại
          Em đã không còn được nhẫn nại
          Bên cạnh người tình mới em đã quên rồi
          Để anh khoác lên thân mình màu đơn côi
          Ta đã từng hứa yêu nhau đến muôn đời sau
          Anh vẫn luôn khắc sâu nhưng hôm nay ân tình phai màu
          Còn gì nữa đâu và đành buông lơi những câu
          Ta phải xa rời nhau như hoa kia dần úa màu
          Trong lòng buồn mỗi khi anh ngắm hoa nhưng dòng lệ rơi
          Em giờ đang khác đi, anh biết chắc chắn sẽ không còn cơ hội
          Đành vậy thế thôi, ân tình nay vỡ đôi
          Anh chúc em luôn nở nụ cười yên vui
          Ta đã từng hứa yêu nhau đến muôn đời sau
          Anh vẫn luôn khắc sâu nhưng hôm nay ân tình phai màu
          Còn gì nữa đâu và đành buông lơi những câu
          Ta phải xa rời nhau như hoa kia dần úa màu
          Trong lòng buồn mỗi khi anh ngắm hoa nhưng dòng lệ rơi
          Em giờ đang khác đi, anh biết chắc chắn sẽ không còn cơ hội
          Đành vậy thế thôi, ân tình nay vỡ đôi
          Anh chúc em luôn nở nụ cười yên vui
          Anh chúc em luôn nở nụ cười yên vui`,
      singer: "Châu Khải Phong",
      path: "assets/music/NgamHoaLeRoi-ChauKhaiPhong-4850041.mp3",
      image: "assets/image/anh8.jpeg",
    },
    {
      name: "Ngày Chưa Giông Bão",
      lyrics: `Vì [Am]ta yêu nhau như cơn sóng vỗ 
      Quẩn [Em]quanh bao năm không buông mặt hồ 
      Thuyền [G]anh đi xa bờ thì em vẫn dõi chờ 
      [F]Duyên mình dịu êm thơ rất thơ 
      Và [Am]anh nâng niu em như đóa hoa 
      Còn [Em]em xem anh như trăng ngọc ngà 
      Tự [G]do như mây vàng mình phiêu du non ngàn 
      [Dm]Dẫu trần gian bao la đến đâu nơi anh là [F]nhà 
       
      Oh oh oh oh oh [Dm]oh
      [F]Oh oh oh oh oh [Dm]oh
       
      Khi anh [Am]qua thung lũng, và bóng đêm [C]ghì bàn chân, 
      Đời khiến anh [Dm]chẳng còn nhiều luyến lưu, em mong lau [F]mắt anh khô 
      Ta yêu [Am]sai hay đúng, còn thấy đau [G]là còn thương 
      Khi bão qua [Dm]rồi biết đâu sẽ... đi tới nơi của [F]ngày đầu, hết [Am]muộn sầu.
       
      That Arizona [Am]sky burning in your [F]eyes 
      You [C]look at me and, babe, I wanna catch on [G]fire 
      It's buried in my [Am]soul like California [F]gold 
      You [C]found the light in me that I couldn't [G]find 
       
      So when I'm [F]all choked up But I can't find the [C]words 
      Every [Am]time we say goodbye. Baby, it [G]hurts 
      When the [F]sun [G]goes [Am]down and the [F]band [G]won't [C]play 
      I'll [F]always re [G]member us this [C]way.
       
      Babe
      [F]I don't wanna be just a memory, [C]oh oh oh oh oh oh oh oh
      Oh oh oh oh, [F]oh oh oh [G]baby, yeah.
       
      Khi anh [Am]qua thung lũng, và bóng đêm [C]ghì bàn chân, 
      Đời khiến anh [Dm]chẳng còn nhiều luyến lưu, em mong lau [F]mắt anh khô 
      Ta yêu [Am]sai hay đúng, còn thấy đau [G]là còn thương 
      Khi bão qua [Dm]rồi biết đâu sẽ... đi tới nơi của [F]ngày đầu, hết [Am]muộn sầu.
       
      Lạc [Am]bước giữa những đam mê tăm tối 
      Liệu [Em]máu vẫn nóng nơi tim bồi hồi? 
      Người [G]năm xưa đâu rồi, lạnh băng tiếng khóc cười 
      [F]Anh ở nơi xa xôi vô lối.
       
      That Arizona [Am]sky burning in your [F]eyes 
      You [C]look at me and, babe, I wanna catch on [G]fire 
       
      Mặt [Am]đất níu giữ đôi chân chúng ta 
      Thì [Em]bay lên trong cơn mơ kỳ lạ 
      Ở [G]đó anh vẫn là người yêu thương chan hòa 
      [Dm]Dẫu trần gian cho anh đắng cay nơi em là [F]nhà
       
      When the [F]sun [G]goes [Am]down and the [F]hold [G]world [C]fades
      I'll [F]always re [G]member us this [C]way.`,
      singer: "Hòa Minzy x Văn Mai Hương",
      path: "assets/music/NgayChuaGiongBao.mp3",
      image: "assets/image/anh9.jpeg",
    },
    {
      name: "Ngoài 30",
      lyrics: `[Verse 1]
      Ɗù mạnh mẽ haу mềm уếu
      Thì em vẫn cười tươi thật tươi
      Trông như không có gì
      Ɗù đau đớn em một mình
      Âm thầm em giấu hết trong tim...
      Ϲả thế giới
      Ɛm dành hết cho người ta
      Họ chẳng trân trọng
      Ɲgoài ba mươi thanh xuân vẫn còn
      Ɲhưng lối đi mòn
      Đâu còn đường cho em...
      [Điệp khúc]
      Ɲửa thế giới
      Ɛm dành cho một ai đó thôi
      Ϲòn bao nhiêu
      Hãу dành cho em đi nhé
      Ɓởi thanh xuân em chẳng còn
      Giống như em thuở trăng tròn
      Ϲhẳng cần bận tâm cuộc sống chồng con...
      Tấm thân em chịu đọa đàу
      Ɲét kiêu sa xưa đâu rồi
      Ϲuộc đời em
      Giờ như màn đêm u tối...
      Đớn đau em phải một mình
      Gánh trên vai chữ gia đình
      Ɲgoài ba mươi em chẳng có ai...
      [Ϲoda]
      Giờ ngoài ba mươi em chẳng còn ai
      Ϲhẳng còn ai bên em tháng ngàу xanh
      Tuổi mơ tuổi mộng chẳng còn
      Một mình phải bước tiếp
      Tự mình phải bước tiếp...
      Hà há ha hà ha...
      [Verse 2]
      Ϲả thế giới
      Ɛm dành hết cho người ta
      Họ chẳng trân trọng
      Ɲgoài ba mươi thanh xuân vẫn còn
      Ɲhưng lối đi mòn
      Đâu còn đường cho em...
      [Điệp khúc]
      Ɲửa thế giới
      Ɛm dành cho một ai đó thôi
      Ϲòn bao nhiêu
      Hãу dành cho em đi nhé
      Ɓởi thanh xuân em chẳng còn
      Giống như em thuở trăng tròn
      Ϲhẳng cần bận tâm cuộc sống chồng con...
      Tấm thân em chịu đọa đàу
      Ɲét kiêu sa xưa đâu rồi
      Ϲuộc đời em
      Giờ như màn đêm u tối...
      Đớn đau em phải một mình
      Gánh trên vai chữ gia đình
      Ɲgoài ba mươi em chẳng có ai...
      [Điệp khúc]
      Ɲửa thế giới
      Ɛm dành cho một ai đó thôi
      Ϲòn bao nhiêu
      Hãу dành cho em đi nhé
      Ɓởi thanh xuân em chẳng còn
      Giống như em thuở trăng tròn
      Ϲhẳng cần bận tâm cuộc sống chồng con...
      Tấm thân em chịu đọa đàу
      Ɲét kiêu sa xưa đâu rồi
      Ϲuộc đời em
      Giờ như màn đêm u tối...
      Đớn đau em phải một mình
      Gánh trên vai chữ gia đình
      Ɲgoài ba mươi em chẳng có ai...
      [Kết thúc]
      Đớn đau em phải một mình
      Gánh trên vai chữ gia đình
      Ɲgoài ba mươi em chẳng có ai...`,
      singer: "Thái Học - Lê Chí Trung",
      path: "assets/music/Ngoai30.mp3",
      image: "assets/image/anh10.jpeg",
    },
    {
      name: "Ngôi Nhà Hạnh Phúc",
      lyrics: `[F]Là vì em hạnh phúc khi [G]có anh bên cạnh em [Am]
      [F]Một nụ hôn thật khẽ lên đôi mắt[G] em mỗi khi buồn[C]
      [F]Những điều em thầm giấu trong [G]trái tim đã lâu thật lâu[Am]
      [F]Dù ngày mai ra sao [G]thì vẫn chỉ yêu người thôi[C]
       
      [F]Dẫu chỉ là [G]giấc mơ em xin mơ hoài[Am]
      [F]Cuối con đường[G] nắng lên chờ anh đến[C]
      [F]Đến khi nào [G]trên thế gian mặt trời[Em] ngừng sáng lối em đi về[Am]
      [F]Ánh mắt này, [G]đôi tay này mãi thuộc về nhau.[Am]
       
      [F]Và nếu e muốn đi xa [G]nơi anh, [Am]gạt đi tình yêu nơi anh
      [F]Bỏ qua ngày tháng cùng [G]nhau vượt qua, [C]nếu em hiểu?
      [F]Rồi lúc e khóc trong vòng [G]tay anh, [Am]để 
      anh nhận ra là e làm ra để [F]anh mang đi theo [G]
      Suốt [Am]cuộc đời…
      [F]Ai cũng sẽ chỉ một [G]hạnh phúc trên [Am]dòng đường đời
      [F]Và ai cũng sẽ nhận ra [G]người mình ko [C]thể quên
      Thì em [F]hãy cứ đi [G] [Em]tìm một hạnh phúc [Am]mới…
      [F]Tìm một người thay thế anh trong những đêm [E]....
      Để anh một mình[F] nhé[G] em em [Am] cứ đi đi ,
      Đập nát hết [F]ngày tháng [G]qua em cứ [C]đi đi
      Vì anh đã [F]chọn về mình thế [G]thôi
      [Em]Chằng thể nào đổi thay [Am]anh biết thời gian chẳng [F]thể nào
      Quên đi [G]được một người… [Am]
       
      ***
       
      [F]Ai cũng sẽ chỉ một [G]hạnh phúc trên [Am]dòng đường đời
      [F]Và ai cũng sẽ nhận ra [G]người mình ko [C]thể quên
      Thì em [F]hãy cứ đi [G] [Em]tìm một hạnh phúc [Am]mới…
      [F]Tìm một người thay thế anh trong những đêm [E]....
      [F]Dẫu chỉ là [G]giấc mơ em xin mơ hoài[Am]
      [F]Cuối con đường[G] nắng lên chờ anh đến[C]
      [F]Đến khi nào [G]trên thế gian mặt trời[Em] ngừng sáng lối em đi về[Am]
      [F]Ánh mắt này, [G]đôi tay này mãi thuộc về nhau.[Em]
      Để anh một mình[F] nhé[G] em em [Am] cứ đi đi ,
      Đập nát hết [F]ngày tháng [G]qua em cứ [C]đi đi
      Vì anh đã [F]chọn về mình thế [G]thôi
      [Em]Chằng thể nào đổi thay [Am]anh biết thời gian chẳng [F]thể nào
      Quên đi [G]được một người… [Am]
       
      [F]Là vì em hạnh phúc khi [G]có anh bên cạnh em [Am] (4 lần)`,
      singer: "Trung Quân",
      path: "assets/music/NgoiNhaHanhPhuc.mp3",
      image: "assets/image/anh0.jpg",
    },
    {
      name: "Người Đã Yêu Ai",
      lyrics: `Người đã yêu ai, em mang trao ai cả muôn ngàn lời yêu
          Người nỡ quên anh, quên hết đi những tháng ngày bên nhau
          Mang ước mơ bấy lâu hoá thành niềm đau
          Phải chăng ký ức những dĩ vãng chưa phai màu
          Người đã yêu ai, em mang trao ai hết muôn ngàn lời hứa?
          Để dấu yêu xưa tan biến như khói sương mờ tan mau
          Mang dấu yêu bấy lâu hoá thành niềm đau
          Để cho ký ức vẫn cứa vết thương càng sâu
          Tìm về góc phố đó, tình yêu vẫn còn
          Mà sao hơi ấm thân quen nay chẳng còn bên anh?
          Lạc giữa đêm tối
          Cô đơn lạnh lùng
          Nhận ra bên anh nay đã chẳng còn em
          Cười chúc em hạnh phúc, niềm đau xé lòng
          Tự anh bóp nát trái tim để không còn đau thêm
          Nhìn theo người đi, ứa hoen tràn mi
          Lặng thầm bước tiếp với nỗi nhớ riêng mình anh
          Người đã yêu ai, em mang trao ai cả muôn ngàn lời yêu
          Người nỡ quên anh, quên hết đi những tháng ngày bên nhau
          Mang ước mơ bấy lâu hoá thành niềm đau
          Phải chăng ký ức những dĩ vãng chưa phai màu
          Người đã yêu ai, em mang trao ai hết muôn ngàn lời hứa?
          Để dấu yêu xưa tan biến như khói sương mờ tan mau
          Mang dấu yêu bấy lâu hoá thành niềm đau
          Để cho ký ức vẫn cứa vết thương càng sâu
          Cười chúc em hạnh phúc, niềm đau xé lòng
          Tự anh bóp nát trái tim để không còn đau thêm
          Nhìn theo người đi, ứa hoen tràn mi
          Lặng thầm bước tiếp với nỗi nhớ riêng mình anh
          Người đã yêu ai, em mang trao ai cả muôn ngàn lời yêu
          Người nỡ quên anh, quên hết đi những tháng ngày bên nhau
          Mang ước mơ bấy lâu hoá thành niềm đau
          Phải chăng ký ức những dĩ vãng chưa phai màu
          Người đã yêu ai, em mang trao ai hết muôn ngàn lời hứa?
          Để dấu yêu xưa tan biến như khói sương mờ tan mau
          Mang dấu yêu bấy lâu hoá thành niềm đau
          Để cho ký ức vẫn cứa vết thương càng sâu
          Người đã yêu ai, em mang trao ai cả muôn ngàn lời yêu
          Người nỡ quên anh, quên hết đi những tháng ngày bên nhau
          Mang ước mơ bấy lâu hoá thành niềm đau
          Phải chăng ký ức những dĩ vãng chưa phai màu
          Người đã yêu ai, em mang trao ai hết muôn ngàn lời hứa?
          Để dấu yêu xưa tan biến như khói sương mờ tan mau
          Mang dấu yêu bấy lâu hoá thành niềm đau
          Để cho ký ức vẫn cứa vết thương càng sâu
          `,
      singer: "Châu Khải Phong",
      path: "assets/music/NguoiDaYeuAi-ChauKhaiPhongLuongGiaHung-3307265.mp3",
      image: "assets/image/anh1.jpeg",
    },
    {
      name: "Người Như Anh",
      lyrics: `Và rồi hôm ấy
      Mình rời bước cách xa nhau
      Dẫu hai ta chẳng ai giận hờn
      Nhưng cảm giác bên nhau ngày một xa hơn
      Lời hứa ta đã từng dành cho nhau
      Giờ chúng ta xếp lại ngày mai sau
      Em khóc cho bao mộng mơ
      Anh khóc cuộc tình bơ vơ
      Chúng ta gần nhau mà như cách xa
      Chúng ta gần nhau mà lòng băng giá
      Tình yêu có phải khi ta chấp nhận
      Rời xa để thấy yêu nhau nhiều hơn
      Anh mong rằng em sẽ có một người
      Yêu em cùng em đến hết cuộc đời
      Một người mới luôn khiến em vui
      Chẳng phải như anh chỉ làm em khóc
      Nước mắt cho em đã quá đủ rồi
      Nỗi xót xa em nhận lấy nhiều rồi
      Xin lỗi anh không như những gì mà em mong
      Một người như anh
      Và anh biết rằng nơi trái tim em còn
      Còn mong nhớ anh từng giờ
      Nỗi đau anh biết rằng là
      Thật khó để mình quên đi
      Và anh cũng
      Chẳng làm sao để xoá đi được
      Dù đôi lúc anh bật khóc bao đêm
      Chẳng biết bao lâu anh quên ngày mình bên nhau
      Anh mong rằng em sẽ có một người
      Yêu em cùng em đến hết cuộc đời
      Một người mới luôn khiến em vui
      Chẳng phải như anh chỉ làm em khóc
      Nước mắt cho em đã quá đủ rồi
      Nỗi xót xa em nhận lấy nhiều rồi
      Xin lỗi anh không như những gì mà em mong
      Anh mong rằng em sẽ có một người
      Yêu em cùng em đến hết cuộc đời
      Một người mới luôn khiến em vui
      Chẳng phải như anh chỉ làm em khóc
      Nước mắt cho em đã quá đủ rồi
      Nỗi xót xa em nhận lấy nhiều rồi
      Xin lỗi anh không như những gì mà em mong
      Một người như anh
      Xin lỗi anh không như những gì mà em mong
      Một người như anh
      Xin lỗi anh không như những gì mà em mong
      Một người như anh`,
      singer: "Mai Tiến Dũng",
      path: "assets/music/NguoiNhuAnh-MaiTienDung-8095883.mp3",
      image: "assets/image/anh2.jpeg",
    },
    {
      name: "Nỗi Đau Mình Anh",
      lyrics: `Cố nhắm mắt anh bước đi thật nhanh, xóa hết quá khứ em và anh
          Dẫu cho xót xa mấy cũng đành
          Vì bao lời em đã hứa anh chẳng còn tin nữa
          Ta không thể về lại như lúc xưa
          Lúc anh khốn khó nhất em ở đâu, đã nói mãi mãi luôn vì nhau
          Cớ sao chỉ anh với nỗi sầu
          Giờ thôi ngày vui đã hết, ân tình nay đã chết
          Em hãy xem tình ta là dĩ vãng
          Giờ đây đường hai ta không đi chung lối
          Nuối tiếc mấy cũng qua rồi
          Em ơi, quên anh đi như đã từng
          Về với hạnh phúc bên ai
          Về với tình yêu em chọn
          Nhớ thương trong anh đã chết
          Dù cho giờ đây em đi anh đau lắm
          Nuốt nước mắt trong âm thầm
          Nhưng anh không thể quên bao lỗi lầm
          Nhìn em rời bước xa anh
          Hạnh phúc sao quá mong manh
          Đớn đau hôm nay anh giữ không thể phai mờ
          Cố nhắm mắt anh bước đi thật nhanh, xóa hết quá khứ em và anh
          Dẫu cho xót xa mấy cũng đành
          Vì bao lời em đã hứa, anh chẳng còn tin nữa
          Ta không thể về lại như lúc xưa
          Lúc anh khốn khó nhất em ở đâu, đã nói mãi mãi luôn vì nhau
          Cớ sao chỉ anh với nỗi sầu (cớ sao chỉ mỗi anh thôi?)
          Giờ thôi ngày vui đã hết, ân tình nay đã chết
          Em hãy xem tình ta là dĩ vãng
          Giờ đây đường hai ta không đi chung lối
          Nuối tiếc mấy cũng qua rồi
          Em hãy quên anh đi như đã từng
          Về với hạnh phúc bên ai
          Về với tình yêu em chọn
          Nhớ thương trong anh đã chết
          Dù cho giờ đây em đi anh đau lắm
          Nước mắt rớt trong âm thầm
          Nhưng anh không thể quên bao lỗi lầm
          Nhìn em rời bước xa anh
          Hạnh phúc sao quá mong manh
          Đớn đau hôm nay anh giữ
          Giờ đây đường hai ta không đi chung lối
          Nuối tiếc mấy cũng qua rồi
          Em ơi, quên anh đi như đã từng
          Về với hạnh phúc bên ai
          Về với tình yêu em chọn
          Nhớ thương trong anh đã chết
          Dù cho giờ đây em đi anh đau lắm
          Nuốt nước mắt trong âm thầm
          Nhưng anh không thể quên bao lỗi lầm
          Nhìn em rời bước xa anh
          Hạnh phúc sao quá mong manh
          Đớn đau hôm nay anh giữ
          Không thể phai mờ`,
      singer: "Châu Khải Phong-Trịnh Đình Quang",
      path: "assets/music/NoiDauMinhAnh-ChauKhaiPhongTrinhDinhQuang-4361102.mp3",
      image: "assets/image/anh3.jpeg",
    },
    {
      name: "Stand By Me",
      lyrics: `Stand by me 날 바라봐줘
      아직 사랑을 모르지만
      Stand by me 날 지켜봐줘
      아직 사랑에 서툴지만
      너를 볼수록 기분이 좋아져
      나도 몰래 노래를 불러
      한송이 장미를 사고 싶어진
      이런 내 모습 신기한데
      내 마음이 너에게 닿는 듯해
      이 세상이 아름다워
      이런 설레임을 너도 느낀다면
      부디 조금만 기다려줘
      Together make it love
      Forever make it your smile
      너의 환한 미소 가득히
      Together make it love
      Forever make it your smile
      이제 내손을 내손을 잡아
      Whoa, stand by me 나를 바라봐줘
      아직 사랑을 모르지만
      Whoa, stand by me 나를 지켜봐줘
      아직 사랑에 서툰 것 같아
      너를 알수록 가슴이 떨려와
      나는 그저 웃고만 있어
      너에게 살며시 키스 해볼까
      조금 네 맘에 다가설까
      내 마음이 어쩌면 사랑일까
      난 아직은 수줍은데
      아직 한걸음도 다가 서지못한
      나의 사랑을 기다려줘
      Together make it love
      Forever make it your smile
      너의 환한 미소 가득히
      Together make it love
      Forever make it your smile
      이제 조금씩 조금씩 갈게
      Whoa, stand by me 나를 바라봐줘
      좀 더 가까워 지고 싶어
      Whoa, stand by me 나를 지켜봐줘
      좀 더 멋지게 보이고 싶어
      난 처음엔 몰랐어
      누군갈 바라보는 게
      아직도 내 맘 몰라
      그대는 그대를 사랑해
      Together make it love
      Forever make it your smile
      너의 환한 미소 가득히
      Together make it love
      Forever make it your smile
      이제 내 손을 내 손을 잡아
      Whoa, stand by me 나를 바라봐줘
      사랑을 모르지만
      Whoa, stand by me 나를 지켜봐줘
      아직 사랑에 서툰 것 같아`,
      singer: "SHINee",
      path: "assets/music/StanByMe.mp3",
      image: "assets/image/anh4.jpeg",
    },
    {
      name: "Thuyền Quyên",
      lyrics: `Xa xa bóng người thương
      Thấp thoáng trước thềm nhà đang đưa dâu
      Nơi đây phấn son áo màu
      Em sắp theo chồng bỏ lại bến sông kia chờ mong
      Khải lên khúc nhạc hoàng cầm buồn ngày mình biệt ly
      Cung oán cung sầu nặng lòng tiễn chân người ra đi
      Xác pháo vu quy bên thềm có chăng hạnh phúc êm đềm
      Đời người con gái đục trong mười hai bến nước long đong
      Dặm ngàn thiên lí tiễn người đi
      Mây nước u buồn ngày biệt ly
      Khóc cho duyên mình đoạn trường thương loan đò sang ngang
      Áo mới em cài màu hoa cưới
      Sánh bước bên người cùng duyên mới
      Nâng chén tiêu sầu khải một cung đàn từ biệt nhau
      Yêu nhau cởi áo cho nhau
      Về nhà mẹ hỏi qua cầu gió bay
      Từ nay hết duyên em trả áo
      Xem như hết tình mình đã trao
      Phận duyên ta lỡ cung thương đứt đoạn sầu đối gương loan
      Dặm ngàn thiên lý tiễn người đi
      Mây nước u buồn ngày biệt ly
      Khóc cho duyên mình đoạn trường thương loan đò sang ngang
      Áo mới em cài màu hoa cưới
      Sánh bước bên người cùng duyên mới
      Nâng chén tiêu sầu khải một cung đàn từ biệt nhau
      Dặm ngàn thiên lý tiễn người đi
      Mây nước u buồn ngày biệt ly
      Khóc cho duyên mình đoạn trường thương loan đò sang ngang
      Áo mới em cài màu hoa cưới
      Sánh bước bên người cùng duyên mới
      Nâng chén tiêu sầu khải một cung đàn từ biệt nhau
      Bướm lượn là bướm ối ả nó bay (ối ả nó bay)
      Bướm dậu là bướm ối ả nó bay (ối ả nó bay)
      Cá lặn là cá ối ả nó bơi
      Cá lội là cá ối ả nó bơi
      `,
      singer: "Trung Quân",
      path: "assets/music/ThuyenQuyen.mp3",
      image: "assets/image/anh5.jpeg",
    },
    {
      name: "Tình Sâu Đậm, Mưa Mịt Mù",
      lyrics: `Mưa rơi rơi trên mái nhà
      Từng dòng ký ức không xa lạ
      Bụi thời gian dẫu có thêm phai nhoà
      Thì trong em vẫn như ngày đầu
      Ta từng bên nhau mặc cho bão giông
      Em là dòng sông người là cơn sóng
      Và thế gian chợt hoá thiên đường khi em lung linh trong mắt người
      Ước mong em có thể quay lại nơi
      Lúc xưa ta bên nhau chưa cách rời
      Biệt khúc đó sẽ mãi như lời hứa đến suốt kiếp ta chờ nhau
      Và thế gian chợt hoá thiên đường khi ta bên nhau trong tiếng cười
      Có trăng non trên cao không đổi thay
      Có yêu thương trong ta luôn ắp đầy
      Thời gian đó sẽ mãi luôn là những mảnh ký ức xưa đẹp nhất
      Trên thế gian
      Mưa rơi rơi trên mái nhà
      Từng dòng ký ức không xa lạ
      Bụi thời gian dẫu có thêm phai nhoà
      Thì trong em vẫn như ngày đầu
      Ta từng bên nhau mặc cho bão giông (ta từng bên nhau)
      Em là dòng sông người là cơn sóng (em là dòng sông)
      Và thế gian chợt hoá thiên đường khi em lung linh trong mắt người
      Ước mong em có thể quay lại nơi
      Lúc xưa ta bên nhau chưa cách rời
      Biệt khúc đó sẽ mãi như lời hứa đến suốt kiếp ta chờ nhau (ta chờ nhau)
      Và thế gian chợt hoá thiên đường khi ta bên nhau trong tiếng cười
      Có trăng non trên cao không đổi thay
      Có yêu thương trong ta luôn ắp đầy
      Thời gian đó sẽ mãi luôn là những mảnh ký ức xưa đẹp nhất
      Trên thế gian
      Và thế gian chợt hoá thiên đường khi em lung linh trong mắt người
      Ước mong em có thể quay lại nơi
      Lúc xưa ta bên nhau chưa cách rời
      Biệt khúc đó sẽ mãi như lời hứa đến suốt kiếp ta chờ nhau (ta chờ nhau)
      Và thế gian chợt hoá thiên đường khi ta bên nhau trong tiếng cười
      Có trăng non trên cao không đổi thay
      Có yêu thương trong ta luôn ắp đầy
      Thời gian đó sẽ mãi luôn là những mảnh ký ức xưa đẹp nhất
      Trên thế gian`,
      singer: "Trung Quân",
      path: "assets/music/TinhDamSauMuaMitMu.mp3",
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
    const cdThumbAnimate = cdThumb.animate([{ transform: "rotate(360deg)" }], {
      duration: 20000, // 10 seconds
      iterations: Infinity,
    });
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
    lyric.textContent = this.currentSong.lyrics;
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
