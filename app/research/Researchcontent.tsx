"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { FaRegNewspaper } from "react-icons/fa";
import { FaChalkboardTeacher, FaUsersCog, FaUserGraduate, FaUniversity, FaBookOpen, FaClock } from "react-icons/fa";
import Link from "next/link"
import PublicationsAccordion from "../../components/publication";
import DiamondStar from "../../components/DiamondStar";
import FacultyPublications from "../../components/FacultyPublications";
export default function ResearchPage() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [activeTab, setActiveTab] = useState("centerforresearch");
    const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
    const containerRef = useRef<HTMLDivElement | null>(null);

    /** Sections for navigation */
    const sections = [
        { id: "centerforresearch", title: "Centre for Research", icon: MdOutlineWorkspacePremium },
        { id: "publication", title: "Publication", icon: FaRegNewspaper },
    ];

    /** Banner images for each tab */
    const tabImages: Record<string, string> = {
        centerforresearch: "/images/banner/research-banners/center.webp",
        publication: "/images/banner/research-banners/publication.webp",

    };

    const stats = [
        { icon: FaChalkboardTeacher, value: "30", label: "Management Development Programmes" },
        { icon: FaUsersCog, value: "6", label: "Management Research Workshops" },
        { icon: FaUserGraduate, value: "6", label: "Faculty Development Programmes" },
        { icon: FaBookOpen, value: "3", label: "National Level Seminars" },
        { icon: FaUniversity, value: "1", label: "Conferences" },
        { icon: FaClock, value: "4", label: "Short Term Programmes" },
    ];

    // Consultancy Services
    const consultancy = [
        {
            text: "Prem Textiles International, Karur",
            image: "http://premtextiles.com/external/file/PREM-TEXTILES.png",
        },
        {
            text: "Godrej Home Appliances Division",
            image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAM1BMVEVHcEyBAFWBAFWDAFWBAFWBAFWBAFWBAFWBAFWBAFWBAFWBAFWBAFWBAFWBAFWBAFWBAFUP6AP9AAAAEXRSTlMAQ3wIMMP/rhSTVGrSWiHg8JqtA7AAAACeSURBVHgB3Y8BCgMhDAQ3xmxUL+r/X1tEWor0BR2AEYdAgr9EElR/lmykF3r90Zxti1q+qmFTaIBAe/b0RNNRMDIkPs1daC2x1jmJOnsnNouAz87BxeFYpM+I04JVHy62mp8aKTGMOVGwEdLohRQ824HO2e1zxzKg7JdCtwZYTipG4mLV47ZXuZrxOKYyX83fP7R5zwU7DtJwMwR/xwtT5AUVs9/i2AAAAABJRU5ErkJggg==",
        },
        {
            text: "Endolplus Orthopedics India Pvt. Ltd",
            image: "https://static.wixstatic.com/media/e71738_cfbdbfc02ede4a33bc420ac76218efbd~mv2.png/v1/fill/w_260,h_62,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Plus%20Orthopedics%20PNG_edited.png",
        },
        {
            text: "Royal Government of Bhutan",
            image: "https://bms.immi.gov.bt/_next/image?url=%2Flogo.png&w=64&q=75",
        },
        {
            text: "AKR Parcel Service Pvt Ltd",
            image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAOVBMVEVHcEzFExTFExTFExTFExTFExTFExTFExTFExTFExTFExTFExTFExTFExTFExTFExTFExTFExTFExS5rf0PAAAAE3RSTlMACFg3SaiG69yUFCr/bSD2zL6xZZPJ/QAAAOtJREFUeAGNUQcSgyAAY6+G5f//WjVY6W7jCoQLMYg/IYVQ2vD7IlkrnRchbiQ9aZcABGSRsRP9oGUQRZRK4qZUGoi28X7QchMVBtQTHwgc+z1I8qcJkQ6rhSMLoqdDW6y1zrnLyL2xbbx07mrk+04M47T0Rks981O9ftG0r4WkA/lJU0Dnmpl09owN9XL+WJBTa6C4zywghjBCTDNF2qd49HukJX0+I1/Il7E7XUZJdVopBARONnQuaghQR7pSEHe3ulvs/hGlzPTBnGeDloTxD42UjImc1GOXzsUKwjn32nXBgHx/gAMUf2MFW30OPbAV/aoAAAAASUVORK5CYII=",
        },
        {
            text: "Holy Cross Mat. School",
            image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAA/1BMVEX////44NfzwKzxt5/urZLyxrXhwLm6ssG9v9C3uM368Ovto4XayMirrcbQ0Nz45N3q9fbT5+u11d6rz9vK4eXh7vD39Pfa6e2axtPB3OOQxdOAvMz09ff0+vrs2tTz1sr00sHX1uDuyLr///xwssbdv7u+tK/Tyteklri6rsjIwdGnpLfxvae3scNyus9c4f9jqNhZaXtkV5BlOaPRIUSEdJrw5+WCh7BqocBozO9Ui3XSpTubkaejq8lJXrVniK9p2v9XkpuankxdbKdtzeTV0tLe3+lzgbqSnYZTYK7j4dzExMSzpsOngZK7wdjGj4jUsrOzamnHmpmXmr2gQEBtBYIEAAABt0lEQVR4Aa2QBXLjMBRAf1hyLCUxg8zBMnM4Udmw7f2vUnK8OLx9A4I3H+E7KJUr1WqlXIJ/qVXrDYQxatSrtb+U0BQJza+UiE3hd9eqYgrtjiQrsgoqxdXWb3FVosm6YVqmZLO2rWqk+iu2iRnIpum4nu+CZJhtDTcLVxYDUKDjhUIUCaHXNnSJikVXVaIq3XZtk0moqYYMpJq/vF7gGHpfkDuD4SjY2hY8U24HPe9L7uyCbDg+7O0fHB4dn5xCqBs67O7kWZGjS6Wz4Pxi//Lq8Ppm66wkSYAqucRtq+NHW+PJdDabL3a3Iv9D4upGdgzJh1EwmSxX+xfrD2nKSiERAJQEvnV7d3e/Z21xoQTwkbZoqCNHPuzyu7vJ8gFDGElK0ZDX40bX8SM2opP7xydHCKFrF6NAhcAHtYgNgkfOoq8QUvm5vjHhAGHIOGdhCMAREsuQw55jRNA4jrcGAY3JGJ2TcQI5mMI5pjwS07Ms+SGCy+KXJcc0DxwD5cJr+pqlSZr1zpKzFF6AojxU+wiFNKV4TMgYczfpxRqMYQNBnMQxzx88xpwQjgrJGDD4jYAB5fA/vAN2LzaXkzKVjQAAAABJRU5ErkJggg==",
        },
        {
            text: "Southern India Mills Association (SIMA)",
            image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAbCAMAAABY1h8eAAAAt1BMVEX//////v/8//z7//+12MVpsIgVhko3lmOFv5zQ6tr//v693coZiVEAeScAfCtMoXDa8OP3/fqw0r4AfTIAh0R4tZKx1r6BupoqjVcAcyVgqX4AeCUzll2TwqXs9fLy/fQAdyGMwaL//P/g8eYtkVSezrcAeB9pqIbh8+p2uJFzsJIAcxhRn3PC4tHU6N5Ln3PI49drsIg+m2eOvqcAfTqgyLNJmGdTnnY/lmygza1ip4QAbhLf7errU9IuAAABuklEQVR4AZXQVWLCQBRA0fsyeJjQIVYgrrjVZf/bqttvz7gLf4hgIfyPoLA63V5/MAQ14i9RYI+142hHTy5A+MtMJ67r+UEQXs6c+QV/Bb3FIootkhQCL3NzVSi+xK7rlxD3skVlY+rLprUKPtnaDViGvcV8aq9mUYC13qy/71I5ObV2trtg7u+X21k/5TDbMVIIR8czu8wv436+H54m++X50hq6BwRGXGVr+vNyHCco2M9b06uprksRRkx0J2ns7Y4v/k19S9vYCCxdN7X1MEJ4N5LldloRNDUjuNFn7raBz+flLVG3OzcpsxPASefGDdojii+T0psaNwIYZ7t9U0bme3DE4O1SVD0L6On9MSvPS/W5baGYD8M5lZcKzLWdXnfteyO8E3YHVYXK61kCtZ7zsMkfYj4NxybU5X4RAUU6XgSssuWjUYKIGpcPTzW3zoCP77u+XhrPT8NnQZ7b6XGTs3KvlzICIddb7E24exaRxAx1lxt9PUQs3h2amONj+FwIS78fqr3r2nwSTH8RGkDUx+yjp2OEb2aycarzUZTsH+dVls35Q7HLb5YgimV47h75S74yJd/VD696jyojwbga3gAAAABJRU5ErkJggg==",
        },
        {
            text: "Premier Fine Yarns Pvt. Ltd",
            image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAABcVBMVEVHcEwABAYYUmsAAAAYgqMDsPYhmNN1jZ86V2UFBwcABQQArvY1co1WUEp0maxAk8d1hYgEp+MAq/EAqvAAr/Q7a4Q6KRJFWmIAr/cGp/AOAABafXs+aX4Ap+0Aqe0AqO5JMR5EOigAp+kAqfEAp+0FAwBUfoZEKhNMW18keptRGwsKmNoDr/kAse4igqlET1QApeQBpOdaaWsTl8kApekApuoSibwglMFEQThRV1IJnNMCqOoBpd8ApOQApOYUlM4Bq+wAtPsAsfgGo9k6gJkpW28Aq+8CpOUlXm5cdX92h5MCrfJVPCwaAAAAAAAApecnaoQyOi06Tk8Aqe0+gZR+ZE9cOSgLmcdgbWZgQikndZMdaoY5iqUjXm8PdZ0AAABKaoEEodstcooFaYRFWV5bbXBXEAAnUGgAn+NNVl4XjscndpIYirokLi4gf6Foh4ZBSkVicXIxfKU7Y3gae7BjdoFJVllFWF5+iIxZaGpfbGpZmB6IAAAAe3RSTlMACBIQIEpBRUYlAaGZrLFPFozx5NDM5PCJGh2becn/ktX+w3i2NOf8ymCf4+Isut7ZY3vh3/YsuvX2v3CbzuiFWcD64qE9gK77xlo2g1NBnv//0qSGv56zx+DtxXWb0FHs+v9RibrwOIjfn//def+nWU3t/+1r/fkdz3I3gfH+AAAB0UlEQVR4AWIgEgDYJAYEBaLojrNd42zbXNu2Mu6fXZ/PBkAQhCAI2MqEEQRBMQ53nc4bXYTP5wuEIvGMsOBKJLBUJlcoVWqNVqtd4e3o9EIDTuCkgKIZ1sjXrTBNZotVLiMRm93iwAmnaYXpctMer9HnQv1UIBgyhpdygBFNJBqL+7Qgmkim0mljBuMC02DAbC5fUEWLpR3AVy5XvMH07t4+xJtyDxQEETk8tB8dZ07YBImfnp1jvFkeWj5BXLguY1fXbubE53OfnRW1c5+uMh5kksmb27v7UNqYfFA9lA9mPk2PTxHcm6okA9FTgkidxJ+NfDbMmzBfRGbLa0RaSb+9n4ZSbPZCls/nPqZM0+cX9W3/SXiHzODJgZaUOXO/plm0kOnz71rnkhbeT71Sl/ZCrjmAporDD62E0slysvD+Hjj5/Xe8VTgT+mhBmWCIIIJMoVoNxGs0HTXXoUX9shdGHDcaC9VG4MZtvf1qtoAFM4xks9nEiaPRCPzbWq1Wm8tbtBoYzc7Pr6PaqGV+xsicOQVK/51ut/dfWhAXSzJYqUZZWVm5aCkTZtrjqihNrQSC1NIKLsxUK1BoZFRVZWRUKIApycUoxckpBcJgxxAGAH7AVdi6lYDFAAAAAElFTkSuQmCC",
        },
        {
            text: "Vee Technologies",
            image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAwFBMVEVHcEzpsiz3jx7Ngj7vqiH3kh72ix/2gx/ak0HpoS/PhT35mBP0nBnUhzrijzX6nxPqjirzpB7/qQe7lmL1giD1giD1giDogiv4gh6MeG37qRmgelSaeFeuoYnhnzK+j1UAgMz/xA3/xwv5yRL+ygueoqnTsmv1gh/6oBr4mRyEfnT8qBn/zAH4lBzNgz7+1QD3sAvpuzGoppb8vwv3ih73jxz1hR2Ee3T3qA7hmTP+yAn+tBP84ADsyT/t2z11fYanT+aDAAAAJ3RSTlMA/b5MGL6+vi397Ur+/vdjpHgF/u6QxsK/26vc/uOKyQqGue/obf0LHTxtAAAA0ElEQVQokdXQxxaCMBBAUUFFYsPee0sQE1QEQ9P//ysn2BX2erfv5MxMUqm/lckkt9pskVynnjlXE5rmbczAKsQ2dReG4em0WsYNHO6v6tXv2NtalmeaQeC5o89WNXzfgqFAcivvrUAMw4enGwG548nrMmUXISRJu4hUP/dfDu4ewfppUMo/Dq5gx6ZFwjnfCpwjxu5Vw9g52FQnMDhCSJkxlo6WwYKokCO6TktQYa7awNcKGTqg1D44LC9eNlu5G0WRs0CWFSXXaadjP/mHXQAjyiH1uh6A7AAAAABJRU5ErkJggg==",
        },
        {
            text: "Balajee Infratech & Constructions Pvt. Ltd",
            image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAqFBMVEVHcEyZmZmioqOgoKGKi4x6enuCg4V+f4F+f4G8eHqpqqutrq+mpqhxcXJ1dniYmJlxc3VwcXOurq+ys7SYmZlyc3XLy8yWl5d1dnidnp+TlJWampuKioyenp+Cg4SAgYOgoKHXMTXXMTXXMTXXMTXXMDXXMTXXMTXXMTXXMTXXMTXXMTXXMTXXMTXXMTXXMTXXMTXXMTXXMTXXMTXXMTXXMTXXMTXXMTWf06aWAAAAOHRSTlMAIDhVDUvI/5kDx/+TMHW/+Vrtav/tJeqF/f/e/9z/6b3t2tH+ky6844AowXJSn0lbsTg+DREXHgVAUN8AAAEFSURBVHgBYhi8AMDGXCQACAMxAEy9xWlx//8rWS743FYSxrngEoBUEg9CGwsnozhOkGYpLo7lrihKAD6O44BU4sIqiaxGk8TE46mtGLoadK36Hk9sqMYjSbJpMtnzWFXVTEmSmsEY+6qluqUEoI/jijte9fOWCMAuV/LBQa3LQjcN/Fzl73ZvZqoOGApC2PvtFufCuQD7T1bXDYpLEimVvg3G3qv7+WqpvAvBqWi1Agk+5ZL06fkM1TRtuoojmcN0Y2tIfj5kx6ixpJGvbvU0UONao+z7E/feiNe8+WHHgUi06fGExUBzL2B2jNe6FxM5vj/XXK1P6NBWcX2WNmGBa+74P7sAMdUgNhAKclYAAAAASUVORK5CYII=",
        },
        {
            text: "KMC Constructions Ltd",
            image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAn1BMVEVHcEz2iSf2jEf2jEf2jEf2jEf2jEb2j0P2jEb2jUH2i0f7riH2jEf2jEb6qRT8uBL7uBP7shv8uBL3mTn8uxH9xRD7sBf4lhftGyPvMSntGyP5oiX2hBntDiPtHCTwQiDsFR7////sFSTuIxz////////tFCPtGSP////////tHiT0aiH////tFyT+/v7////1hzz////1gS32jEf8uBNP0BYMAAAANXRSTlMACyfc8+g8aP/K/xSHnbfdN4b///9P//SH///////d/3UYnRQ+9rwulf+5/2VXuuGqSklVpNTT52AAAAEaSURBVHgBndFFtsJQEEXRiz/ihjtx3OY/tv/qVwVvsbtn1YUkQK1ewad6o8la7S+1o0QXX3QNXQxlGJ1vw00ddFVNEzVT1CAsOiM2HFd4j2HFDD8Q7tOwIcKIW9TDg1Wd9rkNhgSioQRfjsYEos2Po4wJHU5n1Oao2LKraHhBbVnDXUsZ1IyQD4fACoyH2aS/GK9jJGmKB9tgaprlAIqyfLR8M2LbLkj5iPFwTGazxSRQHQC7sqxm93Nuo2kQTYxWDTiUZSGLcjbtR0GgDGVhpVcTWlxzGm8pRRP617H+O8enxcUk0o0OdTydd7szkI3ZlFMw4e9+AeG0diiRzvVf+x7n+5or7YaKxCXgB8J7jesadLwxHy9y/OgPP+okMyll9cAAAAAASUVORK5CYII="
        },
        {
            text: "Tagore Institute of Engineering and Technology",
            image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAXCAMAAABd273TAAABd1BMVEVHcEytsKawwp2yvjfj5eeztbDy99zAwcK4wOPMzc7Nz9Pf4ube3+DCxMdlvRPj5XvDxcihu3qjx2v6+1nLy829v8LAwMK8vMC6usC5uLm3t7fJ3U2/vcqNwELw92jh6m++xMq6urufumK4uLm/xoqjwUvGxsPLy8oABZgACJCIiIisrKzp6un///4AAIq5u7xmZmXW3uamp6Hi4d/U1dOAf39dXFzr5918fH1wb22+vr4AAHzO1t+gnpyYmJibmpsAGJl6dXK1treotcv5/SDa29p+ibAAA3KapsTXtafA0jDKyazIyozGyXS/w1rGztnv3s8rOYxISkjAxjzKraTq9TyOjo20tXzb3Zv0+/sWL5YJIHludpiBjblWZqXw8Org7fS9w87z08Dox7OPm7uP1g+Tk5OipV9daZe+wm3GzVvRzMI3SafS6vPI4kChp0DNurBEUpi+4R7X7yiv1QrX3ypzga6bnHt3gpS6pp2Akxuyt0l7gkV8nDMMAAAAJnRSTlMA/hj+M/4e/ghzjklPxf4u5kR2Y7zWqeXBqY6hXP48U5bMsbWIwVD5YCMAAAIaSURBVCiRbZJnc9pQEEU1YBC4gIG4t1TpqXcJFQRCEr0X9wbudtzt9B8f8ARsJ7lfz5m3u3ceBD3HH5yeeDc7HRyB/pvxGf4YV2VWxU149F/smSJwNo6bfHI1LssJbewvPsLwMp7WELQf2FTxdPAV9zNSnNBQY4ejKDvTEWFTJl4Z8HGPi5wOwO4tBjBDRCU2/WLX0YSU0FzKpoFer+sYyFEuiicmnwVGkmCRszE6V7Xt/cMsODRcJM6PD/gYofpQgwYYt9fBsgqR0wHdcVX8zUB4m2Q19zQFckYt0WjkLfiQBhkhsQoPhIlVFiGrOnbpdlsH3QMV5XRsX4BlJvBHmEqaCEnVP9tIrXWTb1nCfjZFkaicHggTkor2hW+1eDKf71ri5RYwSJhlhleaLEqS2dTpNvM93zqweiNSm6Qvrj1fwTJCBkvt3G7jN3tKA9nGQIZM8sMrINjCRS6rp3Y5pXahIBl684shWsSwByhINDRho7oFMga5V92lNzcoISm9aBKaxIkLhdrYwjCapvtVCyLvC7wQokvepreytlbiffzX9ZOT8+sfR6EBDERWYp9CD4VmpVxeKwpKcb18VmneHYXC/iceWWp7C07o4fH6/KxUKipIcb1UrngLR/fOz/bV+96caLv56LQLhY+zaQZGEBSBtZnFq7t7x/nlLPRe8ERXlsOep4X8i/NzH+bm+7864AmHl2OxhQj0G6/gckMd0KJNAAAAAElFTkSuQmCC",
        },
        {
            text: "JSW Steel Ltd",
            image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAANCAMAAACNWf6YAAABBVBMVEVHcEwbJ0kYMWJbc6QgN2orR31TdagcMmZ7NikSAABvkr+YPlE/YJgMAgAgJS5EWpkyPFkiJifYZkx8msJDU39egLEeMmAbKEs4KAAvHwBQaZw3R2ggLkzrimdWfbO7MRgnP2viVjnMRzHKOiFKZI2OFABjfqfXa0pBV4AeLVpliLlSbpJSbZ0fKT89XIcxTImFRz7BRzJggbOnPTJ3Mig9S2lui7bsnnXARzPNUzIYJkPdUjtig7GDqNJgmc1VjMJzQFwyT3fAOy3qkGVBZJgiPYMfP4YfNnVOdaw2U4gvUJEgOn9DbacoQXckRIc5YqEkSI4xWZpxl8TXYjuDrNXVTyXjaDwdE5asAAAARXRSTlMAu8xM/f6w/QgEqxP+I2EaQVtHsma6/akZDjilnzSijMFy096nOIydj+/0/H57rpcdw9inJlSiWJ/zhrvW5Yadftdqfa2nMhTFAAAA2UlEQVQYlW2PZ3eCQBBFh7qCWLGCClbSY0tPTDG7CywgapL//1M8OfIp2fn47nkzcwG4k6vy0vxdt1vtzxwe+9jvHwbDxZRXW3ve0+B+yav1f76HzvhfXDJ1XR2/TVavvc+JPgLJrJdBPTnC2le0lV920bsrCs++qO02SaEXF46wviHUjkiiSgBG2pwTRmtBMbPyUyzAI2LYMFohUWIb01DITl5ssXxzK1mjkOFOglnlGuPTjGk+oZW8EgQKanTKMmqCixqt7NUzgn73a+32Xwvr6ly8zPG0AQ4mkBvJ0v+63QAAAABJRU5ErkJggg==",
        },
    ];

    // MoUs
    const mous = [
        {
            text: "Premier Fine Yarns Pvt. Ltd",
            image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAABcVBMVEVHcEwABAYYUmsAAAAYgqMDsPYhmNN1jZ86V2UFBwcABQQArvY1co1WUEp0maxAk8d1hYgEp+MAq/EAqvAAr/Q7a4Q6KRJFWmIAr/cGp/AOAABafXs+aX4Ap+0Aqe0AqO5JMR5EOigAp+kAqfEAp+0FAwBUfoZEKhNMW18keptRGwsKmNoDr/kAse4igqlET1QApeQBpOdaaWsTl8kApekApuoSibwglMFEQThRV1IJnNMCqOoBpd8ApOQApOYUlM4Bq+wAtPsAsfgGo9k6gJkpW28Aq+8CpOUlXm5cdX92h5MCrfJVPCwaAAAAAAAApecnaoQyOi06Tk8Aqe0+gZR+ZE9cOSgLmcdgbWZgQikndZMdaoY5iqUjXm8PdZ0AAABKaoEEodstcooFaYRFWV5bbXBXEAAnUGgAn+NNVl4XjscndpIYirokLi4gf6Foh4ZBSkVicXIxfKU7Y3gae7BjdoFJVllFWF5+iIxZaGpfbGpZmB6IAAAAe3RSTlMACBIQIEpBRUYlAaGZrLFPFozx5NDM5PCJGh2becn/ktX+w3i2NOf8ymCf4+Isut7ZY3vh3/YsuvX2v3CbzuiFWcD64qE9gK77xlo2g1NBnv//0qSGv56zx+DtxXWb0FHs+v9RibrwOIjfn//def+nWU3t/+1r/fkdz3I3gfH+AAAB0UlEQVR4AWIgEgDYJAYEBaLojrNd42zbXNu2Mu6fXZ/PBkAQhCAI2MqEEQRBMQ53nc4bXYTP5wuEIvGMsOBKJLBUJlcoVWqNVqtd4e3o9EIDTuCkgKIZ1sjXrTBNZotVLiMRm93iwAmnaYXpctMer9HnQv1UIBgyhpdygBFNJBqL+7Qgmkim0mljBuMC02DAbC5fUEWLpR3AVy5XvMH07t4+xJtyDxQEETk8tB8dZ07YBImfnp1jvFkeWj5BXLguY1fXbubE53OfnRW1c5+uMh5kksmb27v7UNqYfFA9lA9mPk2PTxHcm6okA9FTgkidxJ+NfDbMmzBfRGbLa0RaSb+9n4ZSbPZCls/nPqZM0+cX9W3/SXiHzODJgZaUOXO/plm0kOnz71rnkhbeT71Sl/ZCrjmAporDD62E0slysvD+Hjj5/Xe8VTgT+mhBmWCIIIJMoVoNxGs0HTXXoUX9shdGHDcaC9VG4MZtvf1qtoAFM4xks9nEiaPRCPzbWq1Wm8tbtBoYzc7Pr6PaqGV+xsicOQVK/51ut/dfWhAXSzJYqUZZWVm5aCkTZtrjqihNrQSC1NIKLsxUK1BoZFRVZWRUKIApycUoxckpBcJgxxAGAH7AVdi6lYDFAAAAAElFTkSuQmCC",
        },
        {
            text: "AKR Parcel Service Pvt. Ltd",
            image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAOVBMVEVHcEzFExTFExTFExTFExTFExTFExTFExTFExTFExTFExTFExTFExTFExTFExTFExTFExTFExTFExS5rf0PAAAAE3RSTlMACFg3SaiG69yUFCr/bSD2zL6xZZPJ/QAAAOtJREFUeAGNUQcSgyAAY6+G5f//WjVY6W7jCoQLMYg/IYVQ2vD7IlkrnRchbiQ9aZcABGSRsRP9oGUQRZRK4qZUGoi28X7QchMVBtQTHwgc+z1I8qcJkQ6rhSMLoqdDW6y1zrnLyL2xbbx07mrk+04M47T0Rks981O9ftG0r4WkA/lJU0Dnmpl09owN9XL+WJBTa6C4zywghjBCTDNF2qd49HukJX0+I1/Il7E7XUZJdVopBARONnQuaghQR7pSEHe3ulvs/hGlzPTBnGeDloTxD42UjImc1GOXzsUKwjn32nXBgHx/gAMUf2MFW30OPbAV/aoAAAAASUVORK5CYII=",
        },
        {
            text: "Southern India Mills Association (SIMA)",
            image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAbCAMAAABY1h8eAAAAt1BMVEX//////v/8//z7//+12MVpsIgVhko3lmOFv5zQ6tr//v693coZiVEAeScAfCtMoXDa8OP3/fqw0r4AfTIAh0R4tZKx1r6BupoqjVcAcyVgqX4AeCUzll2TwqXs9fLy/fQAdyGMwaL//P/g8eYtkVSezrcAeB9pqIbh8+p2uJFzsJIAcxhRn3PC4tHU6N5Ln3PI49drsIg+m2eOvqcAfTqgyLNJmGdTnnY/lmygza1ip4QAbhLf7errU9IuAAABuklEQVR4AZXQVWLCQBRA0fsyeJjQIVYgrrjVZf/bqttvz7gLf4hgIfyPoLA63V5/MAQ14i9RYI+142hHTy5A+MtMJ67r+UEQXs6c+QV/Bb3FIootkhQCL3NzVSi+xK7rlxD3skVlY+rLprUKPtnaDViGvcV8aq9mUYC13qy/71I5ObV2trtg7u+X21k/5TDbMVIIR8czu8wv436+H54m++X50hq6BwRGXGVr+vNyHCco2M9b06uprksRRkx0J2ns7Y4v/k19S9vYCCxdN7X1MEJ4N5LldloRNDUjuNFn7raBz+flLVG3OzcpsxPASefGDdojii+T0psaNwIYZ7t9U0bme3DE4O1SVD0L6On9MSvPS/W5baGYD8M5lZcKzLWdXnfteyO8E3YHVYXK61kCtZ7zsMkfYj4NxybU5X4RAUU6XgSssuWjUYKIGpcPTzW3zoCP77u+XhrPT8NnQZ7b6XGTs3KvlzICIddb7E24exaRxAx1lxt9PUQs3h2amONj+FwIS78fqr3r2nwSTH8RGkDUx+yjp2OEb2aycarzUZTsH+dVls35Q7HLb5YgimV47h75S74yJd/VD696jyojwbga3gAAAABJRU5ErkJggg==",
        },
        {
            text: "KMC Constructions Ltd, Hyderabad",
            image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAn1BMVEVHcEz2iSf2jEf2jEf2jEf2jEf2jEb2j0P2jEb2jUH2i0f7riH2jEf2jEb6qRT8uBL7uBP7shv8uBL3mTn8uxH9xRD7sBf4lhftGyPvMSntGyP5oiX2hBntDiPtHCTwQiDsFR7////sFSTuIxz////////tFCPtGSP////////tHiT0aiH////tFyT+/v7////1hzz////1gS32jEf8uBNP0BYMAAAANXRSTlMACyfc8+g8aP/K/xSHnbfdN4b///9P//SH///////d/3UYnRQ+9rwulf+5/2VXuuGqSklVpNTT52AAAAEaSURBVHgBndFFtsJQEEXRiz/ihjtx3OY/tv/qVwVvsbtn1YUkQK1ewad6o8la7S+1o0QXX3QNXQxlGJ1vw00ddFVNEzVT1CAsOiM2HFd4j2HFDD8Q7tOwIcKIW9TDg1Wd9rkNhgSioQRfjsYEos2Po4wJHU5n1Oao2LKraHhBbVnDXUsZ1IyQD4fACoyH2aS/GK9jJGmKB9tgaprlAIqyfLR8M2LbLkj5iPFwTGazxSRQHQC7sqxm93Nuo2kQTYxWDTiUZSGLcjbtR0GgDGVhpVcTWlxzGm8pRRP617H+O8enxcUk0o0OdTydd7szkI3ZlFMw4e9+AeG0diiRzvVf+x7n+5or7YaKxCXgB8J7jesadLwxHy9y/OgPP+okMyll9cAAAAAASUVORK5CYII=",
        },
        {
            text: "Prem Textiles International, Karur",
            image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAcCAMAAACnDzTfAAAAhFBMVEVHcEyzr7NRUVEAAACQkJCnp6exsbECAgJ+fn4AAADAv8Czs7OTk5NoaGhUVFT39/f6+vr4+Pj+/v78/PyinKLv9PHq6uo3IzgBsFIArUfR0dHIyMjd3d3Z694jAyXW6tyn2bdrYmwsES1GN0hGu3GKgoqd17AAqDQAq0BTQlMAq0JxaHKyvRrVAAAAD3RSTlMA/WUJqszmQpkd/dXHc4uqX4IzAAABGklEQVQokaXSyXaDMAwF0DAPIbWFsAFDgUDG9v//rwKD64Zuevq29wgZSYfDfxP5YdqkxzjZSyi4Tpu9aCwRmA5H5dqU8U0owOWbVWXTrDIyvSQwzCkIa7DxVguRoXOmFEL075ReYryWCSoryuk5lc/b/VHXj/stb7T5nM1W5Pnn2A9DVQ1Dz5nuGK6G6HQcWVUj/Q/XH21MXdEBiKoGejUPFlOw2DV1JsuO2nRdOY6jw18s1XZtlUC2GfqLBVu/eTqm7rSYu71zGZc2aPUyPGqIRWfsgwwDM2qabitB2+UC9rAdegOsq4A8Ny+Zkyj8sSMM7Yto8HuDAIFn2SHJ6ChgWTqqeHdMgZKMC9n4+0Ojf4nckxv9An/NF5/9H2q6XczOAAAAAElFTkSuQmCC",
        },
        {
            text: "JSW Steel Ltd, Mettur",
            image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAANCAMAAACNWf6YAAABBVBMVEVHcEwbJ0kYMWJbc6QgN2orR31TdagcMmZ7NikSAABvkr+YPlE/YJgMAgAgJS5EWpkyPFkiJifYZkx8msJDU39egLEeMmAbKEs4KAAvHwBQaZw3R2ggLkzrimdWfbO7MRgnP2viVjnMRzHKOiFKZI2OFABjfqfXa0pBV4AeLVpliLlSbpJSbZ0fKT89XIcxTImFRz7BRzJggbOnPTJ3Mig9S2lui7bsnnXARzPNUzIYJkPdUjtig7GDqNJgmc1VjMJzQFwyT3fAOy3qkGVBZJgiPYMfP4YfNnVOdaw2U4gvUJEgOn9DbacoQXckRIc5YqEkSI4xWZpxl8TXYjuDrNXVTyXjaDwdE5asAAAARXRSTlMAu8xM/f6w/QgEqxP+I2EaQVtHsma6/akZDjilnzSijMFy096nOIydj+/0/H57rpcdw9inJlSiWJ/zhrvW5Yadftdqfa2nMhTFAAAA2UlEQVQYlW2PZ3eCQBBFh7qCWLGCClbSY0tPTDG7CywgapL//1M8OfIp2fn47nkzcwG4k6vy0vxdt1vtzxwe+9jvHwbDxZRXW3ve0+B+yav1f76HzvhfXDJ1XR2/TVavvc+JPgLJrJdBPTnC2le0lV920bsrCs++qO02SaEXF46wviHUjkiiSgBG2pwTRmtBMbPyUyzAI2LYMFohUWIb01DITl5ssXxzK1mjkOFOglnlGuPTjGk+oZW8EgQKanTKMmqCixqt7NUzgn73a+32Xwvr6ly8zPG0AQ4mkBvJ0v+63QAAAABJRU5ErkJggg==",
        },
        {
            text: "Tagore Institute of Engineering and Management",
            image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAXCAMAAABd273TAAABd1BMVEVHcEytsKawwp2yvjfj5eeztbDy99zAwcK4wOPMzc7Nz9Pf4ube3+DCxMdlvRPj5XvDxcihu3qjx2v6+1nLy829v8LAwMK8vMC6usC5uLm3t7fJ3U2/vcqNwELw92jh6m++xMq6urufumK4uLm/xoqjwUvGxsPLy8oABZgACJCIiIisrKzp6un///4AAIq5u7xmZmXW3uamp6Hi4d/U1dOAf39dXFzr5918fH1wb22+vr4AAHzO1t+gnpyYmJibmpsAGJl6dXK1treotcv5/SDa29p+ibAAA3KapsTXtafA0jDKyazIyozGyXS/w1rGztnv3s8rOYxISkjAxjzKraTq9TyOjo20tXzb3Zv0+/sWL5YJIHludpiBjblWZqXw8Org7fS9w87z08Dox7OPm7uP1g+Tk5OipV9daZe+wm3GzVvRzMI3SafS6vPI4kChp0DNurBEUpi+4R7X7yiv1QrX3ypzga6bnHt3gpS6pp2Akxuyt0l7gkV8nDMMAAAAJnRSTlMA/hj+M/4e/ghzjklPxf4u5kR2Y7zWqeXBqY6hXP48U5bMsbWIwVD5YCMAAAIaSURBVCiRbZJnc9pQEEU1YBC4gIG4t1TpqXcJFQRCEr0X9wbudtzt9B8f8ARsJ7lfz5m3u3ceBD3HH5yeeDc7HRyB/pvxGf4YV2VWxU149F/smSJwNo6bfHI1LssJbewvPsLwMp7WELQf2FTxdPAV9zNSnNBQY4ejKDvTEWFTJl4Z8HGPi5wOwO4tBjBDRCU2/WLX0YSU0FzKpoFer+sYyFEuiicmnwVGkmCRszE6V7Xt/cMsODRcJM6PD/gYofpQgwYYt9fBsgqR0wHdcVX8zUB4m2Q19zQFckYt0WjkLfiQBhkhsQoPhIlVFiGrOnbpdlsH3QMV5XRsX4BlJvBHmEqaCEnVP9tIrXWTb1nCfjZFkaicHggTkor2hW+1eDKf71ri5RYwSJhlhleaLEqS2dTpNvM93zqweiNSm6Qvrj1fwTJCBkvt3G7jN3tKA9nGQIZM8sMrINjCRS6rp3Y5pXahIBl684shWsSwByhINDRho7oFMga5V92lNzcoISm9aBKaxIkLhdrYwjCapvtVCyLvC7wQokvepreytlbiffzX9ZOT8+sfR6EBDERWYp9CD4VmpVxeKwpKcb18VmneHYXC/iceWWp7C07o4fH6/KxUKipIcb1UrngLR/fOz/bV+96caLv56LQLhY+zaQZGEBSBtZnFq7t7x/nlLPRe8ERXlsOep4X8i/NzH+bm+7864AmHl2OxhQj0G6/gckMd0KJNAAAAAElFTkSuQmCC",
        },
        {
            text: "Membership with CII, MMA (Salem Chapter), NIPM, CODISSA, Salem Productivity Council",
            image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc1Nzc3Nzc3Nzc3Nzc3Kzc3Nzc3Nzc3NTc3Nzc3Nzc3Nzc3NTcrNys3LS03Lf/AABEIAB4AIAMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAAGBwUDAv/EACoQAAIBAgQGAQQDAAAAAAAAAAECAwQRAAUSIQYTIjFBYVEygcHwkaHh/8QAGAEBAAMBAAAAAAAAAAAAAAAAAAIDBQH/xAAbEQABBAMAAAAAAAAAAAAAAAACAAERIQMEEv/aAAwDAQACEQMRAD8Armf51T5LSc6cgux0xx3tqP4HvATNOJ6uQlqjM3gTUQqUxCD2N92t6vj1xjXO+bV8kg1Q06clV8/SWb+e1/8AcAqWvdKwzVEfOWTpeMbXHgD4t4xo6+u3PTqkzuE0pOJa6ldlXMZ2lj+uOazL9wepR77DDvhjiGHPKa4QxzqLshBFx4YX8HEf4nqmTN5aeKAUrU0pvockl7ncE7+ThHwtmTK1FWL0skgWRV7aWJUj1uo+xwzYGcOmZBO4XbjHLWXP61JJHVapC8Q1HSbrpJt6NvZ7YFZdl1TLXiPSYzC6l3MTOqG4030g9z28HF0z3J4M3pwj9EyX5UoG6k/g+RgjHRmnllo4pWVKdkSaVBy5KglgxLFLEgB7AXt3uO1o4dmAhCC0G4vp6hs9qqmS7tUTsAFhdbMLdO43PbsTjc4cyaZ5stp+Y9+YHaNW22JJY/Nrgf35xoZZIc5paZiWejqNcQknOuWGTcao1bUFB0m41Wse22G2Q5IuWq00riWqkHU4GwHwPX7837k2HEOUELlf/9k=",
        },
        {
            text: "Thriveni Earth Movers Ltd, Salem",
            image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAMCAMAAABcOc2zAAAAVFBMVEX////GytnM0N36+vuiqsOaor6Vnru8wdMAJ3oAJXlDV5BXZ5k8UI3d4OmdpcBOX5W5vtFSY5cAI3nz9Pdwfaapr8ewtsvq6/FodaIALXwOM3/W2eOzsbDXAAAAY0lEQVR4AU3ORQLEQAwDwR6mMMP/37m8ietsS+JHaSSMtQbJOe8QVIgpKPmQS6nEk6td0zR1w49ug1HKdL3maxhBKRgjH9PMzzJ9H1iXLaVtWSka2LcjuxNOl49th8aL0do3T+hkA4YPPlxHAAAAAElFTkSuQmCC",
        },
        {
            text: "NEN (National Entrepreneurship Network)",
            image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAhFBMVEX////60sf72M/xUwDxYBzxWwvxXhT84dn73NPyZyvybTb82tDmu7zy1NL2oIXrycrGSEvhq6zfpqfeo6Tt2d30flL0eUrpw8Pdn6DBLjLXjI75s53bmJrVhYfwSwDzc0HcnJ3+9/X4tKDlvsHktbbMYmTv1dbNamzXiozTf4G7AAbJVllocD9DAAAApUlEQVR4Ac3JQwLEQBRF0Rfbtr3//bXdP+Pcch0cO4ahjeU4WnlBECmTOFnmZAJlBVC1P6CfMzjT5IzL7dMs23E9P+D50Pdcx47eLU7S854JiiJmAPIkf0evOO9lJQhVCSCNP7A+Y9OCZdE2Z6x/EFA6XQEIrDq92kOVxLDTQxLR9/iHg2FZ1tj3o3Vu+sC6T+d5Tpd1Xa6X/h2jbbg2Tbdz63DITlUtETjcWZAIAAAAAElFTkSuQmCC",
        },
    ];


    /** Read tab from URL */
    useEffect(() => {
        const tab = searchParams.get("tab");
        if (tab && sections.some((s) => s.id === tab.toLowerCase())) {
            setActiveTab(tab.toLowerCase());
        }
    }, [searchParams]);

    /** Handle tab change */
    const handleTabChange = (tabId: string) => {
        setActiveTab(tabId);
        router.replace(`/research?tab=${tabId}`);
    };

    const currentSection = sections.find((s) => s.id === activeTab);

    useEffect(() => {
        if (!currentSection) return;

        const tabId = currentSection.id;

        // Document title
        document.title = `Research | ${currentSection.title} | Sona School of Business and Management`;

        // Meta description
        let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
        if (!metaDesc) {
            metaDesc = document.createElement('meta');
            metaDesc.name = 'description';
            document.head.appendChild(metaDesc);
        }
        metaDesc.content = `Information about ${currentSection.title} research at Sona School of Business and Management.`;

        // Robots
        let metaRobots = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
        if (!metaRobots) {
            metaRobots = document.createElement('meta');
            metaRobots.name = 'robots';
            document.head.appendChild(metaRobots);
        }
        metaRobots.content = 'index, follow';

        // Canonical link
        let linkCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
        if (!linkCanonical) {
            linkCanonical = document.createElement('link');
            linkCanonical.rel = 'canonical';
            document.head.appendChild(linkCanonical);
        }
        linkCanonical.href = `https://www.sonabusinessschool.com/research?tab=${tabId}`;
    }, [currentSection]);


    return (
        <section className="w-full min-h-screen bg-gray-50 py-12 flex flex-col items-center">
            {/* Banner with section title */}
            <div className="w-full relative">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={tabImages[activeTab]}
                        src={tabImages[activeTab] || ""}
                        alt="Corporate Banner"
                        className="w-full h-auto max-h-96 object-contain"
                        initial={{ x: "-100%", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: "100%", opacity: 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                    />
                </AnimatePresence>

                <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 w-full max-w-7xl px-4 sm:px-6">
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white drop-shadow-lg flex items-center gap-2">
                        {currentSection?.title}
                    </h1>

                    <div className="mt-3 sm:mt-4 w-full">
                        <nav className="flex flex-wrap text-white text-xs sm:text-sm md:text-base" aria-label="Breadcrumb">


                            <ol className="inline-flex flex-wrap items-center space-x-1 sm:space-x-2">
                                {/* Home */}
                                <li className="inline-flex items-center">
                                    <Link
                                        href="/"
                                        className="hover:text-maroon cursor-pointer transition-colors text-white"
                                    >
                                        Home
                                    </Link>
                                    <span className="text-white mx-1">{">"}</span>
                                </li>

                                {/* About */}
                                <li className="inline-flex items-center">
                                    <Link
                                        href="/research"
                                        className="hover:text-maroon cursor-pointer transition-colors text-white"
                                    >
                                        Research
                                    </Link>
                                    <span className="text-white mx-1">{">"}</span>
                                </li>

                                {/* Current Section */}
                                <li className="inline-flex items-center text-yellow-500 font-semibold">
                                    {currentSection?.title}
                                </li>
                            </ol>
                        </nav>
                    </div>

                </div>
            </div>

            {/* Tabs */}

            <div className="w-full relative border-b border-gray-300 mt-6">
                <div
                    ref={containerRef}
                    className="relative flex flex-wrap justify-center gap-2 sm:gap-4 w-full max-w-7xl mx-auto px-2 sm:px-0"
                >
                    {sections.map((sec, index) => {
                        const Icon = sec.icon;
                        const isActive = activeTab === sec.id;

                        return (
                            <button
                                key={sec.id}
                                ref={(el) => {
                                    tabsRef.current[index] = el;
                                }}
                                onClick={() => handleTabChange(sec.id)}
                                className={`relative flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base font-medium rounded-md transition-all duration-500 transform ${isActive
                                    ? "text-maroon scale-105"
                                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                                    }`}
                            >
                                {/* Icon */}
                                <Icon
                                    className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-500 ${isActive ? "text-maroon" : "text-gray-500"
                                        }`}
                                />

                                {/* Text wrapper with underline + arrow */}
                                <span className="relative flex flex-col items-center">
                                    <span>{sec.title}</span>

                                    {/* Underline */}
                                    <span
                                        className={`block h-0.5 bg-maroon transition-all duration-500 rounded-full ${isActive ? "w-full" : "w-0"
                                            }`}
                                    ></span>

                                    {/* Arrow */}
                                    {isActive && (
                                        <span
                                            className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-maroon -mt-px"
                                        ></span>
                                    )}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>




            {/* Content */}
            <div className="w-full max-w-7xl mx-auto mt-6 sm:mt-8 md:mt-10 relative flex flex-col gap-6 sm:gap-8 md:gap-10 px-4 sm:px-6 lg:px-6">
                <AnimatePresence mode="wait">
                    {activeTab === "centerforresearch" && (
                        <motion.div
                            key="centerofresearch"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -40 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="relative rounded-2xl p-6 sm:p-10 l flex flex-col gap-10 bg-white overflow-hidden"
                        >
                            {/* Section Heading */}
                            <div className="text-center relative z-10">

                                <p className=" text-gray-600  text-sm sm:text-base md:text-lg text-sm ">
                                    Centre for Business Transformation
                                </p>
                            </div>

                            {/* Stats (kept as is) */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 relative z-10">
                                {stats.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, delay: i * 0.15 }}
                                        className="bg-white border border-gray-200  p-6 flex flex-col items-center gap-3 hover:shadow-xl hover:border-maroon transition-all duration-300"
                                    >
                                        <item.icon className="w-8 h-8 text-gray-500" />
                                        <h3 className="text-2xl font-bold text-maroon">{item.value}</h3>
                                        <p className="text-sm md:text-base text-maroon text-center">
                                            {item.label}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Consultancy Services */}
                            <div className="relative z-10">
                                <h3 className="text-lg md:text-xl font-semibold text-maroon mb-4 border-l-4 border-yellow-500 pl-3">
                                    Consultancy Services
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {consultancy.map((item, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: i * 0.1 }}
                                            className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md hover:border-maroon transition-all duration-300"
                                        >
                                            <img
                                                src={item.image}
                                                alt={item.text}
                                                className="w-8 h-8 object-contain flex-shrink-0"
                                            />
                                            <span className="text-gray-700 text-sm md:text-base font-medium leading-snug">
                                                {item.text}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* MoUs */}
                            <div className="relative z-10">
                                <h3 className="text-lg md:text-xl font-semibold text-maroon mb-4 border-l-4 border-yellow-500 pl-3">
                                    MoUs with Industries / Organisations
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {mous.map((item, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: i * 0.1 }}
                                            className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md hover:border-maroon transition-all duration-300"
                                        >
                                            <img
                                                src={item.image}
                                                alt={item.text}
                                                className="w-8 h-8 object-contain flex-shrink-0"
                                            />
                                            <span className="text-gray-700 text-sm md:text-base font-medium leading-snug">
                                                {item.text}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            <section className="relative z-10 overflow-hidden bg-maroon py-12 px-8 ">
                                <div className="container">
                                    <div className="-mx-4 flex flex-wrap items-center">
                                        <div className="w-full px-4 lg:w-1/2">
                                            <div className="text-center lg:text-left ">
                                                <div className="mb-10 lg:mb-0 ">
                                                    <h1
                                                        className="mt-0 mb-3 text-2xl font-bold leading-tight sm:text-3xl sm:leading-tight md:text-[40px] md:leading-tight text-white ">
                                                        Enroll in our MBA program and unlock new opportunities.</h1>
                                                    <p
                                                        className="w-full text-base font-medium leading-relaxed sm:text-lg sm:leading-relaxed text-white">
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full px-4 lg:w-1/2">
                                            <div className="text-center lg:text-right">
                                                <a
                                                    className="font-semibold rounded-lg mx-auto inline-flex items-center justify-center bg-white py-4 px-9 hover:bg-opacity-90"
                                                    href="https://www.sonabusinessschool.com/online-application?inst_id=ZFSQSGGCPYXQ9589"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    Apply Now
                                                </a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <span className="absolute top-0 right-0 -z-10">
                                    <svg width="388" height="250" viewBox="0 0 388 220" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.05" d="M203 -28.5L4.87819e-05 250.5L881.5 250.5L881.5 -28.5002L203 -28.5Z" fill="url(#paint0_linear_971_6910)"></path><defs><linearGradient id="paint0_linear_971_6910" x1="60.5" y1="111" x2="287" y2="111" gradientUnits="userSpaceOnUse"><stop offset="0.520507" stop-color="white"></stop><stop offset="1" stop-color="white" stop-opacity="0"></stop></linearGradient></defs></svg></span><span className="absolute top-0 right-0 -z-10"><svg width="324" height="250" viewBox="0 0 324 220" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.05" d="M203 -28.5L4.87819e-05 250.5L881.5 250.5L881.5 -28.5002L203 -28.5Z" fill="url(#paint0_linear_971_6911)"></path><defs><linearGradient id="paint0_linear_971_6911" x1="60.5" y1="111" x2="287" y2="111" gradientUnits="userSpaceOnUse"><stop offset="0.520507" stop-color="white"></stop><stop offset="1" stop-color="white" stop-opacity="0"></stop></linearGradient></defs></svg></span><span className="absolute top-4 left-4 -z-10"><svg width="43" height="56" viewBox="0 0 43 56" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.5"><circle cx="40.9984" cy="1.49626" r="1.49626" transform="rotate(90 40.9984 1.49626)" fill="white"></circle><circle cx="27.8304" cy="1.49626" r="1.49626" transform="rotate(90 27.8304 1.49626)" fill="white"></circle><circle cx="14.6644" cy="1.49626" r="1.49626" transform="rotate(90 14.6644 1.49626)" fill="white"></circle><circle cx="1.49642" cy="1.49626" r="1.49626" transform="rotate(90 1.49642 1.49626)" fill="white"></circle><circle cx="40.9984" cy="14.6642" r="1.49626" transform="rotate(90 40.9984 14.6642)" fill="white"></circle><circle cx="27.8304" cy="14.6642" r="1.49626" transform="rotate(90 27.8304 14.6642)" fill="white"></circle><circle cx="14.6644" cy="14.6642" r="1.49626" transform="rotate(90 14.6644 14.6642)" fill="white"></circle><circle cx="1.49642" cy="14.6642" r="1.49626" transform="rotate(90 1.49642 14.6642)" fill="white"></circle><circle cx="40.9984" cy="27.8302" r="1.49626" transform="rotate(90 40.9984 27.8302)" fill="white"></circle><circle cx="27.8304" cy="27.8302" r="1.49626" transform="rotate(90 27.8304 27.8302)" fill="white"></circle><circle cx="14.6644" cy="27.8302" r="1.49626" transform="rotate(90 14.6644 27.8302)" fill="white"></circle><circle cx="1.49642" cy="27.8302" r="1.49626" transform="rotate(90 1.49642 27.8302)" fill="white"></circle><circle cx="40.9984" cy="40.9982" r="1.49626" transform="rotate(90 40.9984 40.9982)" fill="white"></circle><circle cx="27.8304" cy="40.9963" r="1.49626" transform="rotate(90 27.8304 40.9963)" fill="white"></circle><circle cx="14.6644" cy="40.9982" r="1.49626" transform="rotate(90 14.6644 40.9982)" fill="white"></circle><circle cx="1.49642" cy="40.9963" r="1.49626" transform="rotate(90 1.49642 40.9963)" fill="white"></circle><circle cx="40.9984" cy="54.1642" r="1.49626" transform="rotate(90 40.9984 54.1642)" fill="white"></circle><circle cx="27.8304" cy="54.1642" r="1.49626" transform="rotate(90 27.8304 54.1642)" fill="white"></circle><circle cx="14.6644" cy="54.1642" r="1.49626" transform="rotate(90 14.6644 54.1642)" fill="white"></circle><circle cx="1.49642" cy="54.1642" r="1.49626" transform="rotate(90 1.49642 54.1642)" fill="white"></circle></g>
                                    </svg>
                                </span>
                            </section>
                        </motion.div>
                    )}

                    {activeTab === "publication" && (
                        <motion.div
                            key="publication"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -40 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="relative rounded-2xl p-6 sm:p-10 flex flex-col gap-10 bg-white overflow-hidden"
                        >
                            <FacultyPublications />
                            {/* Heading */}
                            {/* <motion.h3
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="text-2xl sm:text-3xl font-bold text-maroon text-center"
                            >
                                Publication - Centre for Research
                            </motion.h3> */}

                            {/* Description */}
                            {/* <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-gray-700 text-justify text-sm sm:text-base leading-relaxed"
                            >
                                Department of Management Studies is recognized as a Centre for Research by Anna University, Chennai.
                            </motion.p> */}

                            {/* Vision & Mission */}
                            {/* <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="grid sm:grid-cols-2 gap-6"
                            >
                                <div className="p-4 bg-gray-50  shadow-md">
                                    <h4 className="font-semibold text-maroon mb-2">Vision</h4>
                                    <p className="text-gray-700 text-sm sm:text-base">
                                        The center for research and publication in business management will be leading academic organization dedicated to advancing, applying and facilitating high standards of corporate and social research practice for a wide variety of audience across the academic community, corporate and national arenas.
                                    </p>
                                </div>
                                <div className="p-4 bg-gray-50  shadow-md">
                                    <h4 className="font-semibold text-maroon mb-2">Mission</h4>
                                    <p className="text-gray-700 text-sm sm:text-base">
                                        The Centre is committed to enhance management and social research support to scholars, corporate and public agencies for research, publications and consultancy works.
                                    </p>
                                </div>
                            </motion.div> */}

                            {/* Objectives */}
                            {/* <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                className="bg-white  shadow-md p-4"
                            >
                                <h4 className="font-semibold text-maroon mb-2">Objectives</h4>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2">
                                        <DiamondStar className="w-4 h-4 text-maroon/70 mt-1 flex-shrink-0" />
                                        <span className="text-gray-700 text-sm sm:text-base">
                                            Publish the journal Sona Global Management Review (GMR) on a Bi-annual Basis.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <DiamondStar className="w-4 h-4 text-maroon/70 mt-1 flex-shrink-0" />
                                        <span className="text-gray-700 text-sm sm:text-base">
                                            Ensure all faculty members publish two articles every year in Scopus indexed journals.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <DiamondStar className="w-4 h-4 text-maroon/70 mt-1 flex-shrink-0" />
                                        <span className="text-gray-700 text-sm sm:text-base">
                                            Enable five students to publish research articles every year.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <DiamondStar className="w-4 h-4 text-maroon/70 mt-1 flex-shrink-0" />
                                        <span className="text-gray-700 text-sm sm:text-base">
                                            Involve in consultancy work for industry and/or government agency every year.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <DiamondStar className="w-4 h-4 text-maroon/70 mt-1 flex-shrink-0" />
                                        <span className="text-gray-700 text-sm sm:text-base">
                                            Conduct a workshop every year to equip scholars in research methods and data analysis.
                                        </span>
                                    </li>
                                </ul>

                            </motion.div> */}

                            {/* Research Supervisors Table */}
                            {/* <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                                className="overflow-x-auto rounded-xl shadow-md"
                            >
                                <h4 className="font-semibold text-maroon mb-2">Research Supervisors</h4>
                                <table className="min-w-full text-left text-gray-700">
                                    <thead className="bg-maroon text-white">
                                        <tr>
                                            <th className="px-4 py-2">Sl. No</th>
                                            <th className="px-4 py-2">Name of the Research Supervisor</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            "Dr.P.K.Anjani",
                                            "Dr.P.Praba Devi",
                                            "Dr.V.P.Rameshkumaar"
                                        ].map((name, i) => (
                                            <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                                                <td className="px-4 py-2">{i + 1}</td>
                                                <td className="px-4 py-2">{name}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </motion.div> */}

                            {/* Research Scholars Table */}
                            {/* <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 1 }}
                                className="overflow-x-auto rounded-xl shadow-md"
                            >
                                <h4 className="font-semibold text-maroon mb-2">Research Scholars</h4>
                                <table className="min-w-full text-left text-gray-700">
                                    <thead className="bg-maroon text-white">
                                        <tr>
                                            <th className="px-4 py-2">Status</th>
                                            <th className="px-4 py-2">No. of Ph.D Scholars</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { status: "Ph.D Awarded", count: 0 },
                                            { status: "Thesis Submitted", count: 0 },
                                            { status: "Pursuing", count: 9 }
                                        ].map((row, i) => (
                                            <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                                                <td className="px-4 py-2">{row.status}</td>
                                                <td className="px-4 py-2">{row.count}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </motion.div> */}

                            {/* Overall Publication Details */}
                            {/* <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="overflow-x-auto rounded-xl shadow-md"
                            >
                                <h4 className="font-semibold text-maroon mb-2 text-lg">Overall Publication Details</h4>
                                <table className="min-w-full text-left text-gray-700 border">
                                    <thead className="bg-maroon text-white">
                                        <tr>
                                            <th className="px-3 py-2 border">S.No</th>
                                            <th className="px-3 py-2 border">Faculty Name</th>
                                            <th className="px-3 py-2 border">Citations</th>
                                            <th className="px-3 py-2 border">H index</th>
                                            <th className="px-3 py-2 border">2015-16</th>
                                            <th className="px-3 py-2 border">2016-17</th>
                                            <th className="px-3 py-2 border">2017-18</th>
                                            <th className="px-3 py-2 border">2018-19</th>
                                            <th className="px-3 py-2 border">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            ["Dr. Swarup K. Mohanty", 18, 2, "2+1*", 1, 1, "-", "4+1*"],
                                            ["Dr. M. Selvaraj", 121, 6, 2, "1+2*", "-", "-", "3+2*"],
                                            ["Dr.P.K.Anjani", 23, 2, "", 1, "", 1, 2],
                                            ["Dr.P.Praba Devi", 10, 2, 1, "", "", "1*", "1+1*"],
                                            ["Dr. D. Immanuel", "", "", 2, "1+1*", "", "", "3+1*"],
                                            ["Prof. A.Velsamy", 1, 1, 1, 2, 1, 1, 5],
                                            ["Dr.N.Nithya", 3, 1, 1, 2, "", "4+2*", "7+2*"],
                                            ["Dr.P.Kamalakannan", "", "", 2, 1, "", 1, 4],
                                            ["Dr.V.P.RameshKumaar", "", "", 2, 2, "-", "", 4],
                                            ["Dr.D.Ganesan", 1, 1, 1, 2, 1, "", 4],
                                            ["Dr.S.Sathya Kala", "", "", 1, "1*", "", 2, "3+1*"],
                                            ["Ms. Umaya Salma Shaajahan", "", "", "", "", 1, 1, 2],
                                            ["Prof.R.Nithya", "", "", 2, 1, "", 1, 4],
                                            ["Prof.M.S.Kamalaveni", "", "", 3, 1, 1, "", 5],
                                            ["Prof.V.JothiFrancina", "", "", "", 4, 2, 1, 7],
                                            ["Prof. Vijay Krishnan", ".", "", 1, "", "", 1, ""],
                                            ["Prof. Srinivasan", "", "", 1, "", "", 1, ""],
                                            ["Prof.V.Sathish", "", "", 1, "", "", "", 1],
                                        ].map((row, i) => (
                                            <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                                                <td className="px-2 py-1 border">{i + 1}</td>
                                                {row.map((cell, idx) => (
                                                    <td key={idx} className="px-2 py-1 border">{cell}</td>
                                                ))}
                                            </tr>
                                        ))}
                                        <tr className="bg-gray-100 font-semibold">
                                            <td colSpan={4} className="px-2 py-1 border text-start">TOTAL (Year wise)</td>
                                            <td className="px-2 py-1 border">21+1*</td>
                                            <td className="px-2 py-1 border">21+4*</td>
                                            <td className="px-2 py-1 border">7</td>
                                            <td className="px-2 py-1 border">12+3*</td>
                                            <td className="px-2 py-1 border">61+8*=69</td>
                                        </tr>
                                    </tbody>
                                </table>

                            </motion.div>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="text-sm sm:text-base text-gray-700 font-medium text-start"
                            >
                                *SCOPUS INDEXED
                            </motion.p> */}

                            {/* MOU Section */}
                            {/* <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="bg-gray-50 p-4  shadow-md"
                            >
                                <h4 className="font-semibold text-maroon mb-2">MOU</h4>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2">
                                        <DiamondStar className="w-4 h-4 text-maroon/70 mt-1 flex-shrink-0" />
                                        <span className="text-gray-700">
                                            Signed MOU with SVYASA Deemed University, Bangalore in July 2016 for Collaborative Research.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <DiamondStar className="w-4 h-4 text-maroon/70 mt-1 flex-shrink-0" />
                                        <span className="text-gray-700">
                                            Signed MoU with Daffodil University, Bangladesh for Collaborative Research and Academic activities.
                                        </span>
                                    </li>
                                </ul>

                            </motion.div> */}

                            {/* Books Publication Table */}
                            {/* <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                className="overflow-x-auto rounded-xl shadow-md"
                            >
                                <h4 className="font-semibold text-maroon mb-2 text-lg">Books Publication</h4>
                                <table className="min-w-full text-left text-gray-700 border">
                                    <thead className="bg-maroon text-white">
                                        <tr>
                                            <th className="px-3 py-2 border">S.No</th>
                                            <th className="px-3 py-2 border">Year</th>
                                            <th className="px-3 py-2 border">Number of Books Published</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            [1, 2018, 2],
                                            [2, 2017, 1],
                                            [3, 2016, 2],
                                            [4, 2014, 2],
                                        ].map((row, i) => (
                                            <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                                                {row.map((cell, idx) => (
                                                    <td key={idx} className="px-2 py-1 border">{cell}</td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                            </motion.div> */}

                            {/* <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="text-sm sm:text-base text-gray-700 font-medium text-start"
                            >
                                Our faculty have presented and published papers in various National/International conferences and Journals.
                            </motion.p> */}

                            {/* <PublicationsAccordion /> */}

                            {/* <motion.h3
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="text-xl sm:text-2xl font-bold text-maroon text-start"
                            >
                                Projects
                            </motion.h3> */}

                            {/* Government Sponsored Projects Table */}
                            {/* <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="overflow-x-auto rounded-xl shadow-md"
                            >
                                <h4 className="font-semibold text-maroon mb-2 text-lg">Government Sponsored Projects</h4>
                                <table className="min-w-full text-left text-gray-700 border">
                                    <thead className="bg-maroon text-white">
                                        <tr>
                                            <th className="px-3 py-2 border">S.No</th>
                                            <th className="px-3 py-2 border">Title of the Project</th>
                                            <th className="px-3 py-2 border">Agency / Scheme</th>
                                            <th className="px-3 py-2 border">Grant (Rs.)</th>
                                            <th className="px-3 py-2 border">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            [1, "Preparation of Human Development Report for Salem District", "State Planning Commission of Tamilnadu", "Rs.3.0 lakh", "Completed"],
                                            [2, "Preparation of Perspective Plan for Seven Backward Blocks of Salem District under SBGF", "State Planning Commission of Tamilnadu", "Rs.9.0 lakh", "Completed"],
                                        ].map((row, i) => (
                                            <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                                                {row.map((cell, idx) => (
                                                    <td key={idx} className="px-2 py-1 border">{cell}</td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </motion.div> */}

                            {/* Sponsored Student Live Projects Table */}
                            {/* <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="overflow-x-auto rounded-xl shadow-md"
                            >
                                <h4 className="font-semibold text-maroon mb-2 text-lg">Sponsored Student Live Projects</h4>
                                <table className="min-w-full text-left text-gray-700 border">
                                    <thead className="bg-maroon text-white">
                                        <tr>
                                            <th className="px-3 py-2 border">S.No</th>
                                            <th className="px-3 py-2 border">Company Details</th>
                                            <th className="px-3 py-2 border">Student Projects</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            [1, "Farm Harvest", "A study on Market potential for popcorn vending machine"],
                                            [2, "Play Factory", "Logistics and Warehousing"],
                                            [3, "JSW", "Demand forecasting"],
                                            [4, "Jana Laxmi", "Vendor Analysis of unorganized retail sector"],
                                            [5, "Zha Consultancy", "Distribution channel structures"],
                                            [6, "Professional Courier, Salem", "Field Analysis and Process Planning"],
                                            [7, "Sri Jayaaishree Food Products Ltd.", "A study on business model of coffee vending machine in Salem"],
                                            [8, "Fibro Foods", "A Study on Marketing Strategy for Organic Food Products"],
                                        ].map((row, i) => (
                                            <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                                                {row.map((cell, idx) => (
                                                    <td key={idx} className="px-2 py-1 border">{cell}</td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </motion.div> */}


                        </motion.div>
                    )}


                </AnimatePresence>
            </div>


        </section>
    );
}
