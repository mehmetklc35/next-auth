# 🔐 Next.js ve Auth0 ile Rol Tabanlı Kimlik Doğrulama Sistemi

Bu proje, **Next.js (App Router)** altyapısı üzerinde **Auth0** ve **NextAuth.js** kullanarak güvenli bir kullanıcı kimlik doğrulama sistemi sunar. Kullanıcılar rollerine göre (`admin` veya `user`) yönlendirilir ve yalnızca yetkili sayfalara erişebilir. Arayüzler modern ve duyarlı olacak şekilde **Tailwind CSS** ile tasarlanmıştır.


## Özellikler

- ✅ Auth0 üzerinden oturum açma
- ✅ Kişiselleştirilmiş giriş sayfası
- ✅ Auth0 PostLogin Action ile dinamik rol atama (admin/user)
- ✅ Kullanıcı rolü JWT token ve session'a aktarılır
- ✅ Role göre içerik gösterimi (dashboard/admin)
- ✅ `middleware.ts` ile route koruması
- ✅ Tam oturum kapatma (NextAuth + Auth0 logout)
- ✅ Şık ve responsive arayüz (TailwindCSS)


## Demo Giriş Bilgileri

| Rol    | E-posta           | Açıklama                 |
|--------|-------------------|--------------------------|
| Admin  | admin@demo.com    | Yönetici yetkileri       |
| User   | herhangi bir email| Normal kullanıcı rolü    |

> `admin@demo.com` adresi ile giriş yapan kullanıcıya otomatik olarak **admin** rolü atanır. Diğer kullanıcılara `user` rolü verilir.


## Kullanılan Teknolojiler

- [Next.js 14 (App Router)](https://nextjs.org/docs/app)
- [NextAuth.js](https://next-auth.js.org/)
- [Auth0](https://auth0.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- TypeScript
