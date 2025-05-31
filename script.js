const plants = [
    {
        name: "Pandan",
        image: "images/Pandan.png",
        nama_umum: "Pandan",
        nama_ilmiah: "Pandanus amaryllifolius",
        jenis_tanaman: "Termasuk dalam tanaman toga (tanaman obat keluarga)",
        deskripsi: "Pandan adalah tanaman tropis berdaun panjang dan ramping, berwarna hijau tua, sering digunakan dalam masakan Asia Tenggara.",
        manfaat: {
            kuliner: [
                "Pewangi makanan: Digunakan untuk memberi aroma khas pada nasi, kue, dan masakan tradisional.",
                "Pewarna alami: Air rebusan daun pandan memberi warna hijau alami pada makanan."
            ],
            kesehatan: [
                "Mengatasi hipertensi: Rebusan daun pandan dipercaya membantu menurunkan tekanan darah.",
                "Melancarkan pencernaan: Digunakan untuk meredakan perut kembung.",
                "Meredakan nyeri sendi: Daun pandan dicampur minyak kelapa untuk mengurut tubuh.",
                "Obat penenang ringan: Digunakan dalam ramuan herbal untuk mengatasi kecemasan."
            ]
        }
    },
    {
        name: "Serai",
        image: "images/Serai.jpg",
        nama_umum: "Serai, Serai Wangi",
        nama_ilmiah: "Cymbopogon citratus",
        jenis_tanaman: "Tanaman toga (tanaman obat keluarga), juga termasuk tanaman rempah",
        deskripsi: "Serai adalah tanaman tropis berbentuk rumput tinggi dengan aroma khas lemon, sering tumbuh di pekarangan rumah.",
        manfaat: {
            kuliner: [
                "Bumbu masakan: Digunakan dalam sup, kari, dan sate.",
                "Aroma minuman: Memberi aroma khas pada teh herbal."
            ],
            kesehatan: [
                "Antioksidan dan antibakteri: Senyawa sitral bersifat antimikroba.",
                "Meredakan demam dan flu: Rebusan serai membantu melegakan pernapasan.",
                "Menurunkan tekanan darah: Berfungsi sebagai diuretik alami.",
                "Melancarkan pencernaan: Membantu mengatasi kembung dan mual.",
                "Menenangkan pikiran: Digunakan dalam aromaterapi untuk mengurangi stres."
            ]
        }
    },
    {
        name: "Kembang Telang",
        image: "images/KembangTelang.jpg",
        nama_umum: "Kembang Telang",
        nama_ilmiah: "Clitoria ternatea",
        jenis_tanaman: "Tanaman toga (tanaman obat keluarga), juga tanaman hias dan pewarna alami",
        deskripsi: "Kembang telang adalah tanaman merambat dengan bunga biru keunguan, sering digunakan sebagai pewarna alami.",
        manfaat: {
            kuliner: [
                "Pewarna alami: Digunakan dalam nasi biru dan teh herbal.",
                "Minuman herbal: Teh kembang telang populer karena warnanya menarik."
            ],
            kesehatan: [
                "Antioksidan dan anti-inflamasi: Mengandung antosianin sebagai antioksidan kuat.",
                "Meningkatkan fungsi otak: Membantu daya ingat dan fungsi kognitif.",
                "Menurunkan stres: Memiliki efek menenangkan.",
                "Menurunkan gula darah: Bermanfaat untuk penderita diabetes.",
                "Mengatasi pencernaan: Digunakan untuk meredakan diare."
            ]
        }
    },
    {
        name: "Kemuning",
        image: "images/Kemuning.jpg",
        nama_umum: "Kemuning",
        nama_ilmiah: "Murraya paniculata (L.) Jack",
        jenis_tanaman: "Tanaman obat keluarga (TOGA), juga tanaman hias dan pagar hidup",
        deskripsi: "Kemuning adalah semak kecil dengan bunga putih harum, sering digunakan sebagai tanaman hias.",
        manfaat: {
            kuliner: [
                "Ramuan jamu: Daun muda dan bunga digunakan dalam jamu tradisional.",
                "Teh herbal: Daun memberikan rasa pahit ringan dalam teh pelangsing."
            ],
            kesehatan: [
                "Melangsingkan badan: Digunakan dalam ramuan tradisional.",
                "Mengobati sakit gigi: Air busa batang membantu meredakan nyeri.",
                "Mengatasi haid tidak teratur: Daun membantu mengatur siklus menstruasi.",
                "Melancarkan darah: Mengurangi pembengkakan.",
                "Mengatasi infeksi saluran kencing: Rebusan daun digunakan.",
                "Meredakan rematik: Daun membantu nyeri sendi.",
                "Menurunkan kolesterol: Membantu menurunkan kadar kolesterol.",
                "Mengatasi pencernaan: Meredakan diare dan sembelit."
            ]
        }
    },
    {
        name: "Daun Sirih",
        image: "images/DaunSirih.jpg",
        nama_umum: "Daun Sirih",
        nama_ilmiah: "Piper betle",
        jenis_tanaman: "Tanaman obat keluarga (TOGA), tanaman merambat",
        deskripsi: "Daun sirih adalah tanaman merambat berdaun jantung, sering dibudidayakan di pekarangan tropis.",
        manfaat: {
            kuliner: [
                "Pembungkus tradisional: Digunakan dalam tradisi makan sirih.",
                "Campuran jamu: Digunakan dalam minuman herbal."
            ],
            kesehatan: [
                "Mengatasi keputihan: Rebusan digunakan sebagai air bilasan.",
                "Mengobati mimisan: Daun muda digunakan untuk menghentikan perdarahan.",
                "Meredakan batuk: Air rebusan membantu peradangan tenggorokan.",
                "Mengatasi bau mulut: Digunakan untuk berkumur karena antibakteri.",
                "Mengobati luka: Ditumbuk dan ditempelkan pada luka ringan.",
                "Mengurangi jerawat: Air rebusan untuk mencuci wajah."
            ]
        }
    },
    {
        name: "Temu Kunci",
        image: "images/TemuKunci.jpg",
        nama_umum: "Kunci, Temu Kunci",
        nama_ilmiah: "Boesenbergia rotunda",
        jenis_tanaman: "Tanaman obat keluarga (TOGA), keluarga Zingiberaceae",
        deskripsi: "Temu kunci adalah tanaman rimpang dengan aroma khas, sering ditanam di pekarangan.",
        manfaat: {
            kuliner: [
                "Bumbu masakan: Digunakan dalam sayur bening dan pepes.",
                "Penghilang bau amis: Mengurangi aroma daging atau ikan.",
                "Campuran jamu: Digunakan dalam jamu tradisional."
            ],
            kesehatan: [
                "Melancarkan pencernaan: Mengatasi kembung dan diare ringan.",
                "Meningkatkan nafsu makan: Digunakan untuk anak-anak.",
                "Mengatasi bau badan: Berfungsi sebagai antibakteri alami.",
                "Antimikroba: Membantu melawan infeksi ringan.",
                "Meredakan batuk: Air rebusan untuk tenggorokan."
            ]
        }
    },
    {
        name: "Jeruk Purut",
        image: "images/JerukPurut.jpg",
        nama_umum: "Jeruk Purut",
        nama_ilmiah: "Citrus hystrix",
        jenis_tanaman: "Tanaman obat keluarga (TOGA), tanaman rempah dan aromatik",
        deskripsi: "Jeruk purut adalah perdu dengan daun berlapis dan buah kecil berkulit kasar, beraroma kuat.",
        manfaat: {
            kuliner: [
                "Bumbu masakan: Daun digunakan dalam sup dan sambal.",
                "Penyedap: Kulit buah diparut untuk aroma.",
                "Minuman herbal: Digunakan dalam jamu tradisional."
            ],
            kesehatan: [
                "Mengatasi kembung: Rebusan daun meredakan gangguan pencernaan.",
                "Meredakan flu: Minyak atsiri membantu pernapasan.",
                "Menurunkan demam: Digunakan dalam air mandi.",
                "Mengurangi stres: Aroma segar memberikan relaksasi.",
                "Obat luar: Untuk kutu air atau gatal."
            ]
        }
    },
    {
        name: "Temulawak",
        image: "images/Temulawak.jpg",
        nama_umum: "Temulawak",
        nama_ilmiah: "Curcuma xanthorrhiza",
        jenis_tanaman: "Tanaman obat keluarga (TOGA), keluarga jahe-jahean",
        deskripsi: "Temulawak adalah tanaman rimpang berwarna kuning tua, sering dibudidayakan untuk jamu.",
        manfaat: {
            kuliner: [
                "Bahan jamu: Digunakan dalam jamu tradisional.",
                "Minuman herbal: Dicampur dengan madu atau asam.",
                "Pewarna alami: Kadang digunakan dalam makanan."
            ],
            kesehatan: [
                "Menjaga hati: Berfungsi sebagai hepatoprotektor alami.",
                "Meningkatkan nafsu makan: Digunakan untuk anak-dewasa.",
                "Anti-inflamasi: Mengurangi peradangan.",
                "Melancarkan pencernaan: Mengatasi sembelit dan kembung.",
                "Antioksidan: Melindungi sel dari radikal bebas.",
                "Meningkatkan daya tahan: Mengurangi kelelahan."
            ]
        }
    },
    {
        name: "Kemangi",
        image: "images/Kemangi.jpg",
        nama_umum: "Kemangi",
        nama_ilmiah: "Ocimum × citriodorum",
        jenis_tanaman: "Tanaman obat keluarga (TOGA), tanaman rempah dan sayuran",
        deskripsi: "Kemangi adalah semak kecil berdaun hijau cerah, sering digunakan sebagai lalapan.",
        manfaat: {
            kuliner: [
                "Lalapan: Disajikan dengan pecel atau ayam goreng.",
                "Pewangi masakan: Digunakan dalam pepes dan urap.",
                "Campuran sambal: Memberikan aroma segar."
            ],
            kesehatan: [
                "Mengatasi bau badan: Antiseptik alami mengurangi bau.",
                "Menjaga pencernaan: Mengatasi kembung dan mual.",
                "Melancarkan ASI: Membantu ibu menyusui.",
                "Mengurangi stres: Aroma memberikan efek menenangkan.",
                "Meningkatkan nafsu makan: Merangsang selera makan.",
                "Antioksidan: Menjaga daya tahan tubuh."
            ]
        }
    },
    {
        name: "Jahe",
        image: "images/Jahe.jpeg",
        nama_umum: "Jahe",
        nama_ilmiah: "Zingiber officinale",
        jenis_tanaman: "Tanaman obat keluarga (TOGA), rempah dan aromatik",
        deskripsi: "Jahe adalah tanaman rimpang beraroma pedas, populer di masakan dan pengobatan Asia.",
        manfaat: {
            kuliner: [
                "Bumbu dapur: Digunakan dalam masakan dan minuman.",
                "Minuman tradisional: Bahan wedang jahe dan bandrek.",
                "Penghilang bau amis: Mengurangi aroma daging atau ikan.",
                "Pewangi: Memberikan rasa hangat pada sup dan kari."
            ],
            kesehatan: [
                "Menghangatkan tubuh: Meredakan masuk angin.",
                "Meredakan mual: Cocok untuk mabuk perjalanan.",
                "Meningkatkan daya tahan: Imunostimulan alami.",
                "Melancarkan pencernaan: Mengatasi kembung dan mulas.",
                "Anti-inflamasi: Baik untuk rematik dan nyeri sendi.",
                "Menurunkan kolesterol: Mendukung kesehatan jantung."
            ]
        }
    },
    {
        name: "Kencur",
        image: "images/Kencur.webp",
        nama_umum: "Kunyit",
        nama_ilmiah: "Curcuma longa",
        jenis_tanaman: "Tanaman obat keluarga (TOGA), rempah-rempah",
        deskripsi: "Kunyit adalah tanaman rimpang berwarna kuning, banyak dibudidayakan di wilayah tropis.",
        manfaat: {
            kuliner: [
                "Pewarna alami: Memberi warna kuning pada opor dan nasi kuning.",
                "Bumbu dasar: Bagian penting dalam bumbu kuning.",
                "Minuman tradisional: Digunakan dalam jamu kunyit asam."
            ],
            kesehatan: [
                "Antiinflamasi: Meredakan nyeri sendi dan rematik.",
                "Melancarkan haid: Membantu nyeri haid.",
                "Menjaga hati: Mendukung detoksifikasi.",
                "Meningkatkan daya tahan: Antioksidan melindungi sel.",
                "Meningkatkan nafsu makan: Merangsang produksi empedu.",
                "Mengatasi jerawat: Digunakan sebagai masker alami."
            ]
        }
    },
    {
        name: "Lidah Buaya",
        image: "images/LidahBuaya.webp",
        nama_umum: "Lidah buaya",
        nama_ilmiah: "Aloe vera",
        jenis_tanaman: "Tanaman obat keluarga (TOGA), tanaman hias dan kosmetik",
        deskripsi: "Lidah buaya adalah tanaman sukulen berdaun tebal, mudah tumbuh di iklim tropis.",
        manfaat: {
            kuliner: [
                "Minuman segar: Daging digunakan dalam es atau jus.",
                "Makanan sehat: Diolah dalam makanan fungsional."
            ],
            kesehatan: [
                "Menyembuhkan luka: Gel mempercepat penyembuhan luka bakar.",
                "Mengatasi iritasi: Baik untuk kulit gatal dan sunburn.",
                "Menurunkan gula darah: Membantu penderita diabetes.",
                "Melancarkan pencernaan: Mengatasi sembelit ringan.",
                "Menguatkan imun: Mengandung antioksidan.",
                "Menenangkan maag: Mengurangi peradangan pencernaan."
            ]
        }
    },
    {
        name: "Kunir",
        image: "images/Kunir.jpg",
        nama_umum: "Kunir / Kunyit",
        nama_ilmiah: "Curcuma longa",
        jenis_tanaman: "Tanaman obat keluarga (TOGA), rempah-rempah",
        deskripsi: "Kunir adalah tanaman rimpang berwarna jingga, mudah tumbuh di wilayah tropis.",
        manfaat: {
            kuliner: [
                "Pewarna alami: Memberi warna kuning pada masakan.",
                "Penyedap rasa: Digunakan dalam masakan tradisional.",
                "Minuman jamu: Bahan utama jamu kunyit asam."
            ],
            kesehatan: [
                "Anti peradangan: Mengurangi nyeri sendi dan peradangan.",
                "Melancarkan haid: Membantu siklus menstruasi.",
                "Detoksifikasi hati: Mendukung kesehatan liver.",
                "Mengatasi pencernaan: Mengurangi kembung dan mual.",
                "Mengatasi kulit: Masker alami untuk jerawat.",
                "Meningkatkan imun: Melindungi dari radikal bebas."
            ]
        }
    },
    {
        name: "Pepaya",
        image: "images/Pepaya.jpg",
        nama_umum: "Pepaya",
        nama_ilmiah: "Carica papaya",
        jenis_tanaman: "Tanaman obat keluarga (TOGA), buah tropis",
        deskripsi: "Pepaya adalah pohon tropis dengan buah lonjong, tumbuh subur di iklim hangat.",
        manfaat: {
            kuliner: [
                "Buah segar: Dikonsumsi sebagai pencuci mulut.",
                "Sayuran: Pepaya muda untuk tumis atau lodeh.",
                "Pelunak daging: Getah digunakan untuk mengempukkan daging."
            ],
            kesehatan: [
                "Melancarkan pencernaan: Kaya enzim papain dan serat.",
                "Meningkatkan imun: Mengandung vitamin A dan C.",
                "Baik untuk mata: Mendukung kesehatan mata dan kulit.",
                "Melancarkan ASI: Pepaya muda membantu ibu menyusui.",
                "Meningkatkan trombosit: Daun untuk demam berdarah.",
                "Mengontrol gula: Membantu kadar gula darah."
            ]
        }
    },
    {
        name: "Bawang Dayak",
        image: "images/BawangDayak.jpg",
        nama_umum: "Bawang Dayak, Bawang Tiwai",
        nama_ilmiah: "Eleutherine palmifolia",
        jenis_tanaman: "Tanaman obat keluarga (TOGA), tanaman herbal tradisional",
        deskripsi: "Bawang Dayak adalah tanaman umbi merah keunguan, berasal dari Kalimantan.",
        manfaat: {
            kuliner: [
                "Rebusan herbal: Kadang dimasukkan dalam jamu."
            ],
            kesehatan: [
                "Antikanker: Membantu menghambat pertumbuhan sel kanker.",
                "Menurunkan tekanan darah: Membantu penderita hipertensi.",
                "Menurunkan gula darah: Terapi tambahan diabetes.",
                "Melancarkan haid: Baik untuk gangguan menstruasi.",
                "Mengatasi kolesterol: Menjaga kadar lemak darah.",
                "Meredakan batuk: Rebusan untuk flu.",
                "Antibakteri: Melawan infeksi ringan.",
                "Meningkatkan imun: Kandungan antioksidan tinggi."
            ]
        }
    },
    {
        name: "Belimbing Wuluh",
        image: "images/BelimbingWuluh.jpg",
        nama_umum: "Belimbing Wuluh, Belimbing Sayur",
        nama_ilmiah: "Averrhoa bilimbi",
        jenis_tanaman: "Tanaman obat keluarga (TOGA), tanaman buah dan rempah",
        deskripsi: "Belimbing wuluh adalah tanaman buah kecil lonjong berwarna hijau, rasa sangat asam.",
        manfaat: {
            kuliner: [
                "Bumbu masakan: Digunakan dalam sayur asam dan sambal.",
                "Manisan: Buah dijadikan asinan.",
                "Pengawet alami: Membantu mengawetkan makanan."
            ],
            kesehatan: [
                "Menurunkan tekanan darah: Rebusan daun membantu hipertensi.",
                "Mengatasi batuk: Dicampur madu untuk sakit tenggorokan.",
                "Mengontrol gula darah: Bermanfaat untuk diabetes.",
                "Mengatasi jerawat: Dioleskan pada kulit berjerawat.",
                "Meredakan rematik: Daun untuk kompres nyeri.",
                "Melancarkan pencernaan: Kandungan serat membantu."
            ]
        }
    },
    {
        name: "Daun Katalop",
        image: "images/DaunKatalop.jpg",
        nama_umum: "Daun Katalop / Daun Katalpa",
        nama_ilmiah: "Catalpa spp. (kemungkinan Catalpa bignonioides)",
        jenis_tanaman: "Tanaman obat keluarga (TOGA), tanaman pelindung",
        deskripsi: "Katalop adalah pohon dengan daun lebar berbentuk hati, sering sebagai tanaman hias.",
        manfaat: {
            kuliner: [],
            kesehatan: [
                "Mengatasi luka: Daun ditumbuk untuk luka ringan.",
                "Meredakan demam: Ditempelkan di dahi untuk menurunkan panas.",
                "Mengatasi pernapasan: Digunakan untuk batuk dan asma.",
                "Anti-inflamasi: Mengurangi nyeri dan peradangan.",
                "Obat gatal: Kompres untuk iritasi kulit."
            ]
        }
    },
    {
        name: "Daun Katuk",
        image: "images/DaunKatuk.jpeg",
        nama_umum: "Daun Katuk",
        nama_ilmiah: "Sauropus androgynus",
        jenis_tanaman: "Tanaman obat keluarga (TOGA), tanaman sayur",
        deskripsi: "Daun katuk adalah perdu berdaun hijau tua, mudah tumbuh di wilayah tropis.",
        manfaat: {
            kuliner: [
                "Sayuran sehat: Dimasak sebagai sayur bening atau tumisan.",
                "Bahan bergizi: Cocok dengan tempe atau jagung."
            ],
            kesehatan: [
                "Melancarkan ASI: Pelancar ASI alami.",
                "Meningkatkan imun: Mengandung vitamin C dan zat besi.",
                "Menjaga mata: Kaya pro-vitamin A.",
                "Mengatasi anemia: Membantu pembentukan sel darah.",
                "Penyembuhan luka: Vitamin C regenerasi jaringan.",
                "Menurunkan kolesterol: Mengontrol lemak darah.",
                "Melancarkan pencernaan: Serat membantu BAB."
            ]
        }
    },
    {
        name: "Ginseng",
        image: "images/Ginseng.jpg",
        nama_umum: "Ginseng",
        nama_ilmiah: "Panax ginseng (Asia), Panax quinquefolius (Amerika)",
        jenis_tanaman: "Tanaman obat keluarga (TOGA), herbal berkhasiat tinggi",
        deskripsi: "Ginseng adalah tanaman herbal dengan akar tebal, tumbuh di iklim sejuk.",
        manfaat: {
            kuliner: [
                "Minuman herbal: Digunakan dalam teh tradisional.",
                "Tambahan sup: Ditambahkan ke sup ayam untuk energi.",
                "Ekstrak energi: Dalam minuman energi komersial."
            ],
            kesehatan: [
                "Meningkatkan stamina: Membantu melawan stres dan kelelahan.",
                "Meningkatkan imun: Merangsang sistem kekebalan.",
                "Meningkatkan otak: Membantu konsentrasi dan memori.",
                "Mengatasi stres: Efek menenangkan pada suasana hati.",
                "Menyeimbang gula: Mengontrol gula darah.",
                "Menambah vitalitas: Untuk performa seksual pria.",
                "Antioksidan: Melindungi sel dari kerusakan."
            ]
        }
    },
    {
        name: "Kitolot",
        image: "images/Kitolot.jpeg",
        nama_umum: "Kitolot, Kitolot Mata",
        nama_ilmiah: "Isotoma longiflora",
        jenis_tanaman: "Tanaman obat keluarga (TOGA), tanaman semak liar",
        deskripsi: "Kitolot adalah semak liar dengan bunga ungu pucat, tumbuh di tempat terbuka.",
        manfaat: {
            kuliner: [],
            kesehatan: [
                "Mengobati mata: Air rebusan untuk mata merah atau iritasi.",
                "Mengatasi luka: Daun ditumbuk untuk luka kecil.",
                "Meredakan gatal: Kompres untuk iritasi kulit.",
                "Antiseptik: Membersihkan luka karena antibakteri."
            ]
        }
    },
    {
        name: "Jahe Emprit",
        image: "images/JaheEmprit.webp",
        nama_umum: "Jahe emprit, jahe putih kecil",
        nama_ilmiah: "Zingiber officinale var. amarum",
        jenis_tanaman: "Tanaman obat keluarga (TOGA), tanaman rempah",
        deskripsi: "Jahe emprit adalah varietas jahe kecil beraroma pedas, populer dalam herbal.",
        manfaat: {
            kuliner: [
                "Rempah masakan: Menambah aroma pada masakan berkuah.",
                "Minuman: Bahan utama wedang jahe.",
                "Pengawet alami: Memperlambat pembusukan makanan."
            ],
            kesehatan: [
                "Menghangatkan tubuh: Mengatasi masuk angin.",
                "Meredakan batuk: Membantu mengencerkan dahak.",
                "Meningkatkan imun: Antioksidan melindungi tubuh.",
                "Melancarkan darah: Mengurangi tekanan darah ringan.",
                "Mengatasi mual: Efektif untuk mabuk perjalanan.",
                "Mengurangi nyeri: Baik untuk sendi dan otot.",
                "Menurunkan kolesterol: Menstabilkan lemak darah."
            ]
        }
    },
    {
        name: "Dlingo Bengle",
        image: "images/DlingoBengle.webp",
        nama_umum: "Bengle, Dlingo Bengle",
        nama_ilmiah: "Zingiber cassumunar",
        jenis_tanaman: "Tanaman obat keluarga (TOGA), keluarga rimpang",
        deskripsi: "Bengle adalah tanaman rimpang beraroma menyengat, tumbuh di dataran rendah.",
        manfaat: {
            kuliner: [
                "Rempah tradisional: Bumbu dalam masakan Jawa.",
                "Minuman jamu: Bahan dasar jamu pahit."
            ],
            kesehatan: [
                "Melancarkan pencernaan: Mengatasi kembung dan masuk angin.",
                "Obat demam: Rebusan menurunkan panas.",
                "Mengobati cacingan: Ramuan antiparasit.",
                "Mengatasi menstruasi: Melancarkan haid.",
                "Meredakan rematik: Baluran untuk nyeri sendi.",
                "Mengatasi keputihan: Ramuan kewanitaan.",
                "Antioksidan: Melindungi dari radikal bebas."
            ]
        }
    },
    {
        name: "Tapak Dara",
        image: "images/TapakDara.jpg",
        nama_umum: "Tapak dara, Bunga sepatu merah",
        nama_ilmiah: "Hibiscus rosa-sinensis",
        jenis_tanaman: "Tanaman obat keluarga (TOGA), tanaman hias",
        deskripsi: "Tapak dara adalah tanaman hias dengan bunga merah besar, tumbuh di iklim tropis.",
        manfaat: {
            kuliner: [
                "Minuman tradisional: Bunga untuk teh herbal.",
                "Pewarna alami: Ekstrak untuk makanan dan minuman."
            ],
            kesehatan: [
                "Menurunkan demam: Rebusan untuk panas tubuh.",
                "Mengatasi batuk: Meredakan iritasi tenggorokan.",
                "Mengatasi kulit: Daun untuk luka ringan.",
                "Melancarkan haid: Membantu siklus menstruasi.",
                "Mengatasi diare: Rebusan daun untuk diare ringan.",
                "Antioksidan: Mengandung flavonoid."
            ]
        }
    },
    {
        name: "Daun Salam",
        image: "images/DaunSalam]=.png",
        nama_umum: "Daun salam",
        nama_ilmiah: "Syzygium polyanthum",
        jenis_tanaman: "Tanaman obat keluarga (TOGA), bumbu dapur",
        deskripsi: "Daun salam adalah daun aromatik dari pohon tropis, sering digunakan dalam masakan.",
        manfaat: {
            kuliner: [
                "Bumbu masakan: Memberi aroma pada gulai dan rendang.",
                "Pewangi alami: Menghilangkan bau amis daging."
            ],
            kesehatan: [
                "Mengontrol gula darah: Membantu penderita diabetes.",
                "Melancarkan pencernaan: Mengurangi kembung dan maag.",
                "Mengurangi kolesterol: Menurunkan kadar lemak darah.",
                "Mengatasi batuk: Rebusan untuk flu dan tenggorokan.",
                "Meredakan nyeri: Kompres untuk sendi.",
                "Antioksidan: Melindungi sel dari kerusakan."
            ]
        }
    },
    {
        name: "Kumis Kucing",
        image: "images/KumisKucing.jpeg",
        nama_umum: "Kumis kucing",
        nama_ilmiah: "Orthosiphon aristatus",
        jenis_tanaman: "Tanaman obat keluarga (TOGA)",
        deskripsi: "Kumis kucing adalah tanaman herbal dengan bunga putih/ungu, tumbuh liar di tropis.",
        manfaat: {
            kuliner: [
                "Minuman herbal: Daun diseduh menjadi teh segar."
            ],
            kesehatan: [
                "Menyembuhkan saluran kemih: Diuretik alami melancarkan buang air kecil.",
                "Mengurangi batu ginjal: Membantu meluruhkan batu.",
                "Meredakan hipertensi: Menurunkan tekanan darah.",
                "Anti-inflamasi: Mengurangi peradangan.",
                "Melancarkan pencernaan: Mengatasi kembung.",
                "Mendukung ginjal: Menjaga fungsi organ."
            ]
        }
    },
    {
        name: "Keladi Tikus",
        image: "images/KeladiTikus.jpg",
        nama_umum: "Keladi tikus",
        nama_ilmiah: "Typhonium flagelliforme",
        jenis_tanaman: "Tanaman obat keluarga (TOGA)",
        deskripsi: "Keladi tikus adalah tanaman herba merambat dengan umbi kecil, tumbuh di Asia Tenggara.",
        manfaat: {
            kuliner: [],
            kesehatan: [
                "Mengobati kanker: Potensi antikanker meningkatkan imun.",
                "Anti-inflamasi: Mengurangi pembengkakan.",
                "Melancarkan darah: Meningkatkan sirkulasi.",
                "Mengatasi asma: Meredakan gejala pernapasan.",
                "Meningkatkan stamina: Digunakan sebagai tonik."
            ]
        }
    }
];

const plantGrid = document.getElementById('plant-grid');
const modal = document.getElementById('plant-modal');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalNamaUmum = document.getElementById('modal-nama-umum');
const modalNamaIlmiah = document.getElementById('modal-nama-ilmiah');
const modalJenisTanaman = document.getElementById('modal-jenis-tanaman');
const modalDeskripsi = document.getElementById('modal-deskripsi');
const modalManfaatKuliner = document.getElementById('modal-manfaat-kuliner');
const modalManfaatKesehatan = document.getElementById('modal-manfaat-kesehatan');
const closeModal = document.getElementById('close-modal');

plants.forEach(plant => {
    const card = document.createElement('div');
    card.className = 'plant-card shadow-lg cursor-pointer';
    card.innerHTML = `
        <img src="${plant.image}" alt="${plant.name}">
        <div class="p-6">
            <h3 class="mb-2">${plant.name}</h3>
        </div>
    `;
    card.addEventListener('click', () => {
        modalImage.src = plant.image;
        modalImage.alt = plant.name;
        modalTitle.textContent = plant.name.toUpperCase();
        modalNamaUmum.textContent = plant.nama_umum;
        modalNamaIlmiah.textContent = plant.nama_ilmiah;
        modalJenisTanaman.textContent = plant.jenis_tanaman;
        modalDeskripsi.textContent = plant.deskripsi;

        modalManfaatKuliner.innerHTML = '';
        modalManfaatKesehatan.innerHTML = '';

        plant.manfaat.kuliner.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            modalManfaatKuliner.appendChild(li);
        });

        plant.manfaat.kesehatan.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            modalManfaatKesehatan.appendChild(li);
        });

        modal.classList.remove('hidden');
    });
    plantGrid.appendChild(card);
});

closeModal.addEventListener('click', () => {
    modal.classList.add('hidden');
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.add('hidden');
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        modal.classList.add('hidden');
    }
});