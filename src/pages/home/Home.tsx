import { Link } from "react-router-dom";
import { Navbar } from "../../components/navbar/Navbar";
import { Button } from "@/components/ui/button";
import {
  Award,
  Clock,
  Facebook,
  Instagram,
  Tag,
  ThumbsUp,
  Twitch,
  Twitter,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { AccordionFaq } from "./components/AccordionFaq";

const Home = () => {
  return (
    <>
      <div className="hidden flex-col md:flex">
        <div className="border-b ">
          <div className="container flex h-16 items-center px-4">
            <a href="#home">
              <div className="h-[34px] w-[100px] bg-zinc-800"></div>
            </a>
            <div className="ml-auto flex items-center space-x-4">
              <Navbar className="mx-6" />
            </div>
          </div>
        </div>
      </div>
      <main>
        <div id="home" className="relative bg-[#F1F3FF]">
          <div className="container flex min-h-[600px] items-center">
            <div className="home-content w-1/2 self-center">
              <h2 className="mb-4 text-4xl font-bold">
                Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
              </h2>
              <p className="mb-5">
                Selamat datang di Binar Car Rental. Kami menyediakan mobil
                kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                kebutuhanmu untuk sewa mobil selama 24 jam.
              </p>
              <Link to={"/cari-mobil"}>
                <Button>Mulai Sewa Mobil</Button>
              </Link>
            </div>
            <img
              className="absolute bottom-0 end-0 max-h-[407px] w-auto"
              src="https://i.ibb.co/xfn2L6m/img-car.png"
            />
          </div>
        </div>

        <div id="our-service" className="container my-[100px]">
          <div className="flex items-center justify-around">
            <img
              className="img-fluid max-h-[428px] w-10/12 xl:w-auto"
              src="https://i.ibb.co/j65fJ4n/img-service.png"
            />
            <div className="w-[468px]">
              <h3 className="mb-4 text-2xl font-bold">
                Best Car Rental for any kind of trip in (Lokasimu)!
              </h3>
              <p className="mb-4 mt-6 font-light">
                Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
                lebih murah dibandingkan yang lain, kondisi mobil baru, serta
                kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
                wedding, meeting, dll.
              </p>
              <div className="font-light">
                <div className="mb-3 flex">
                  <img
                    className="me-3"
                    src="https://i.ibb.co/LvRcJvC/Group-53.png"
                    alt=""
                  />
                  Sewa Mobil Dengan Supir di Bali 12 Jam
                </div>
                <div className="mb-3 flex">
                  <img
                    className="me-3"
                    src="https://i.ibb.co/LvRcJvC/Group-53.png"
                    alt=""
                  />
                  Sewa Mobil Lepas Kunci di Bali 24 Jam
                </div>
                <div className="mb-3 flex">
                  <img
                    className="me-3"
                    src="https://i.ibb.co/LvRcJvC/Group-53.png"
                    alt=""
                  />
                  Sewa Mobil Jangka Panjang Bulanan
                </div>
                <div className="mb-3 flex">
                  <img
                    className="me-3"
                    src="https://i.ibb.co/LvRcJvC/Group-53.png"
                    alt=""
                  />
                  Gratis Antar - Jemput Mobil di Bandara
                </div>
                <div className="mb-3 flex">
                  <img
                    className="me-3"
                    src="https://i.ibb.co/LvRcJvC/Group-53.png"
                    alt=""
                  />
                  Layanan Airport Transfer / Drop In Out
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="why-us"
          className="d-flex flex-column justify-content-center container my-[100px]"
        >
          <h3 className="mb-3 text-2xl font-bold">Why Us?</h3>
          <p className="mb-5">Mengapa harus pilih Binar Car Rental?</p>
          <div className="mt-10 flex gap-6">
            <div className="w-full xl:w-1/4">
              <div className="h-full rounded-md border p-6 shadow-sm">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f9cc00]">
                  <ThumbsUp className="h-5 w-5 text-white" />
                </div>
                <h5 className="my-3 font-bold">Mobil Lengkap</h5>
                <p className="mb-0">
                  Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                  terawat
                </p>
              </div>
            </div>
            <div className="w-full xl:w-1/4">
              <div className="h-full rounded-md border p-6 shadow-sm">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#fa2c5a]">
                  <Tag className="h-5 w-5 text-white" />
                </div>
                <h5 className="my-3 font-bold">Harga Murah</h5>
                <p className="mb-0">
                  Harga murah dan bersaing, bisa bandingkan harga kami dengan
                  rental mobil lain
                </p>
              </div>
            </div>
            <div className="w-full xl:w-1/4">
              <div className="h-full rounded-md border p-6 shadow-sm">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0d28a6]">
                  <Clock className="h-5 w-5 text-white" />
                </div>
                <h5 className="my-3 font-bold">Layanan 24 Jam</h5>
                <p className="mb-0">
                  Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
                  tersedia di akhir minggu
                </p>
              </div>
            </div>
            <div className="w-full xl:w-1/4">
              <div className="h-full rounded-md border p-6 shadow-sm">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#5cb85f]">
                  <Award className="h-5 w-5 text-white" />
                </div>
                <h5 className="my-3 font-bold">Sopir Profesional</h5>
                <p className="mb-0">
                  Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
                  tepat waktu
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="testimonial">
          <div
            id="testimonial-content"
            className="flex flex-col items-center justify-center"
          >
            <h3 className="mb-3 text-2xl font-bold">Testimonial</h3>

            <p className="mx-5 mb-5 text-center">
              Berbagai review positif dari para pelanggan kami
            </p>
            <Swiper
              slidesPerView={"auto"}
              centeredSlides={true}
              spaceBetween={30}
              loop={true}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper w-full"
            >
              <SwiperSlide className="w-[630px]">
                <div className="flex items-center rounded-xl bg-[#F1F3FF] px-8 py-10">
                  <div className="w-1/6">
                    <img
                      className="h-[80px] w-[80px] rounded-full object-cover"
                      src="https://images.pexels.com/photos/18281423/pexels-photo-18281423/free-photo-of-africa-kid.jpeg?auto=compress&cs=tinysrgb&w=1600"
                      alt=""
                    />
                  </div>
                  <div className="w-5/6">
                    <img
                      className="w-[80px]"
                      src="https://i.ibb.co/K2w1HZV/Rate.png"
                      alt=""
                    />
                    <p className="my-2 font-light">
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod lorem ipsum dolor sit
                      amet, consectetur adipiscing elit, sed do eiusmod”
                    </p>
                    <h6 className="font-bold">John Dee 32, Bromo</h6>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="w-[630px]">
                <div className="flex items-center rounded-xl bg-[#F1F3FF] px-8 py-10">
                  <div className="w-1/6">
                    <img
                      className="h-[80px] w-[80px] rounded-full object-cover"
                      src="https://images.pexels.com/photos/18281423/pexels-photo-18281423/free-photo-of-africa-kid.jpeg?auto=compress&cs=tinysrgb&w=1600"
                      alt=""
                    />
                  </div>
                  <div className="w-5/6">
                    <img
                      className="w-[80px]"
                      src="https://i.ibb.co/K2w1HZV/Rate.png"
                      alt=""
                    />
                    <p className="my-2 font-light">
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod lorem ipsum dolor sit
                      amet, consectetur adipiscing elit, sed do eiusmod”
                    </p>
                    <h6 className="font-bold">John Dee 32, Bromo</h6>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="w-[630px]">
                <div className="flex items-center rounded-xl bg-[#F1F3FF] px-8 py-10">
                  <div className="w-1/6">
                    <img
                      className="h-[80px] w-[80px] rounded-full object-cover"
                      src="https://images.pexels.com/photos/18281423/pexels-photo-18281423/free-photo-of-africa-kid.jpeg?auto=compress&cs=tinysrgb&w=1600"
                      alt=""
                    />
                  </div>
                  <div className="w-5/6">
                    <img
                      className="w-[80px]"
                      src="https://i.ibb.co/K2w1HZV/Rate.png"
                      alt=""
                    />
                    <p className="my-2 font-light">
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod lorem ipsum dolor sit
                      amet, consectetur adipiscing elit, sed do eiusmod”
                    </p>
                    <h6 className="font-bold">John Dee 32, Bromo</h6>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="w-[630px]">
                <div className="flex items-center rounded-xl bg-[#F1F3FF] px-8 py-10">
                  <div className="w-1/6">
                    <img
                      className="h-[80px] w-[80px] rounded-full object-cover"
                      src="https://images.pexels.com/photos/18281423/pexels-photo-18281423/free-photo-of-africa-kid.jpeg?auto=compress&cs=tinysrgb&w=1600"
                      alt=""
                    />
                  </div>
                  <div className="w-5/6">
                    <img
                      className="w-[80px]"
                      src="https://i.ibb.co/K2w1HZV/Rate.png"
                      alt=""
                    />
                    <p className="my-2 font-light">
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod lorem ipsum dolor sit
                      amet, consectetur adipiscing elit, sed do eiusmod”
                    </p>
                    <h6 className="font-bold">John Dee 32, Bromo</h6>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="w-[630px]">
                <div className="flex items-center rounded-xl bg-[#F1F3FF] px-8 py-10">
                  <div className="w-1/6">
                    <img
                      className="h-[80px] w-[80px] rounded-full object-cover"
                      src="https://images.pexels.com/photos/18281423/pexels-photo-18281423/free-photo-of-africa-kid.jpeg?auto=compress&cs=tinysrgb&w=1600"
                      alt=""
                    />
                  </div>
                  <div className="w-5/6">
                    <img
                      className="w-[80px]"
                      src="https://i.ibb.co/K2w1HZV/Rate.png"
                      alt=""
                    />
                    <p className="my-2 font-light">
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod lorem ipsum dolor sit
                      amet, consectetur adipiscing elit, sed do eiusmod”
                    </p>
                    <h6 className="font-bold">John Dee 32, Bromo</h6>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="w-[630px]">
                <div className="flex items-center rounded-xl bg-[#F1F3FF] px-8 py-10">
                  <div className="w-1/6">
                    <img
                      className="h-[80px] w-[80px] rounded-full object-cover"
                      src="https://images.pexels.com/photos/18281423/pexels-photo-18281423/free-photo-of-africa-kid.jpeg?auto=compress&cs=tinysrgb&w=1600"
                      alt=""
                    />
                  </div>
                  <div className="w-5/6">
                    <img
                      className="w-[80px]"
                      src="https://i.ibb.co/K2w1HZV/Rate.png"
                      alt=""
                    />
                    <p className="my-2 font-light">
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod lorem ipsum dolor sit
                      amet, consectetur adipiscing elit, sed do eiusmod”
                    </p>
                    <h6 className="font-bold">John Dee 32, Bromo</h6>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div id="banner-sewa" className="container my-[100px]">
          <div className="flex flex-col items-center rounded-xl bg-[#0D28A6] p-16">
            <h2 className="text-center text-3xl font-bold tracking-wide text-white">
              Sewa Mobil di (Lokasimu) Sekarang
            </h2>
            <p className="mb-14 mt-8 w-[450px] text-center font-light text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Button className="rounded-none bg-[#5CB85F]">
              Mulai Sewa Mobil
            </Button>
          </div>
        </div>

        <AccordionFaq />
      </main>

      <footer id="footer" className="container my-[100px]">
        <div className="flex flex-wrap justify-between gap-3">
          <div className="w-full pr-5 font-light xl:w-auto">
            <p>
              Jalan Suroyo No. 161 Mayangan Kota <br /> Probolonggo 672000
            </p>
            <p className="my-4">binarcarrental@gmail.com</p>
            <p>081-233-334-808</p>
          </div>

          <div className="flex w-full flex-col pr-5 xl:w-auto">
            <a className="nav-link mb-3 font-medium" href="#our-service">
              Our Service
            </a>
            <a className="nav-link mb-3 font-medium" href="#why-us">
              Why Us
            </a>
            <a className="nav-link mb-3 font-medium" href="#testimonial">
              Testimonial
            </a>
            <a className="nav-link mb-3 font-medium" href="#faq">
              FAQ
            </a>
          </div>

          <div className="mb-3 w-full pr-5 font-light xl:w-auto">
            <p className="mb-4">Connect with us</p>
            <div className="flex">
              <Link
                to="#"
                className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#0D28A6] text-white"
              >
                <Facebook className="h-5 w-5 stroke-1" />
              </Link>
              <Link
                to="#"
                className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#0D28A6] text-white"
              >
                <Instagram className="h-5 w-5 stroke-1" />
              </Link>
              <Link
                to="#"
                className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#0D28A6] text-white"
              >
                <Twitter className="h-5 w-5 stroke-1" />
              </Link>
              <Link
                to="#"
                className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#0D28A6] text-white"
              >
                <Twitch className="h-5 w-5 stroke-1" />
              </Link>
            </div>
          </div>
          <div className="w-full xl:w-auto">
            <p className="mb-4 font-light">Copyright Binar 2023</p>
            <a href="#home">
              <div className="h-[34px] w-[100px] bg-[#0d28a6]"></div>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
