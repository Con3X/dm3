!(function (e) {
    function r(e, r) {
        'use strict';
        var t,
            a = 'uint8array',
            _ = r.ready.then(function () {
                function a() {
                    if (0 !== t._sodium_init())
                        throw new Error(
                            'libsodium was not correctly initialized.',
                        );
                    for (
                        var r = [
                                'crypto_aead_chacha20poly1305_decrypt',
                                'crypto_aead_chacha20poly1305_decrypt_detached',
                                'crypto_aead_chacha20poly1305_encrypt',
                                'crypto_aead_chacha20poly1305_encrypt_detached',
                                'crypto_aead_chacha20poly1305_ietf_decrypt',
                                'crypto_aead_chacha20poly1305_ietf_decrypt_detached',
                                'crypto_aead_chacha20poly1305_ietf_encrypt',
                                'crypto_aead_chacha20poly1305_ietf_encrypt_detached',
                                'crypto_aead_chacha20poly1305_ietf_keygen',
                                'crypto_aead_chacha20poly1305_keygen',
                                'crypto_aead_xchacha20poly1305_ietf_decrypt',
                                'crypto_aead_xchacha20poly1305_ietf_decrypt_detached',
                                'crypto_aead_xchacha20poly1305_ietf_encrypt',
                                'crypto_aead_xchacha20poly1305_ietf_encrypt_detached',
                                'crypto_aead_xchacha20poly1305_ietf_keygen',
                                'crypto_auth',
                                'crypto_auth_hmacsha256',
                                'crypto_auth_hmacsha256_final',
                                'crypto_auth_hmacsha256_init',
                                'crypto_auth_hmacsha256_keygen',
                                'crypto_auth_hmacsha256_update',
                                'crypto_auth_hmacsha256_verify',
                                'crypto_auth_hmacsha512',
                                'crypto_auth_hmacsha512_final',
                                'crypto_auth_hmacsha512_init',
                                'crypto_auth_hmacsha512_keygen',
                                'crypto_auth_hmacsha512_update',
                                'crypto_auth_hmacsha512_verify',
                                'crypto_auth_keygen',
                                'crypto_auth_verify',
                                'crypto_box_beforenm',
                                'crypto_box_curve25519xchacha20poly1305_keypair',
                                'crypto_box_curve25519xchacha20poly1305_seal',
                                'crypto_box_curve25519xchacha20poly1305_seal_open',
                                'crypto_box_detached',
                                'crypto_box_easy',
                                'crypto_box_easy_afternm',
                                'crypto_box_keypair',
                                'crypto_box_open_detached',
                                'crypto_box_open_easy',
                                'crypto_box_open_easy_afternm',
                                'crypto_box_seal',
                                'crypto_box_seal_open',
                                'crypto_box_seed_keypair',
                                'crypto_core_ed25519_add',
                                'crypto_core_ed25519_from_hash',
                                'crypto_core_ed25519_from_uniform',
                                'crypto_core_ed25519_is_valid_point',
                                'crypto_core_ed25519_random',
                                'crypto_core_ed25519_scalar_add',
                                'crypto_core_ed25519_scalar_complement',
                                'crypto_core_ed25519_scalar_invert',
                                'crypto_core_ed25519_scalar_mul',
                                'crypto_core_ed25519_scalar_negate',
                                'crypto_core_ed25519_scalar_random',
                                'crypto_core_ed25519_scalar_reduce',
                                'crypto_core_ed25519_scalar_sub',
                                'crypto_core_ed25519_sub',
                                'crypto_core_hchacha20',
                                'crypto_core_hsalsa20',
                                'crypto_core_ristretto255_add',
                                'crypto_core_ristretto255_from_hash',
                                'crypto_core_ristretto255_is_valid_point',
                                'crypto_core_ristretto255_random',
                                'crypto_core_ristretto255_scalar_add',
                                'crypto_core_ristretto255_scalar_complement',
                                'crypto_core_ristretto255_scalar_invert',
                                'crypto_core_ristretto255_scalar_mul',
                                'crypto_core_ristretto255_scalar_negate',
                                'crypto_core_ristretto255_scalar_random',
                                'crypto_core_ristretto255_scalar_reduce',
                                'crypto_core_ristretto255_scalar_sub',
                                'crypto_core_ristretto255_sub',
                                'crypto_generichash',
                                'crypto_generichash_blake2b_salt_personal',
                                'crypto_generichash_final',
                                'crypto_generichash_init',
                                'crypto_generichash_keygen',
                                'crypto_generichash_update',
                                'crypto_hash',
                                'crypto_hash_sha256',
                                'crypto_hash_sha256_final',
                                'crypto_hash_sha256_init',
                                'crypto_hash_sha256_update',
                                'crypto_hash_sha512',
                                'crypto_hash_sha512_final',
                                'crypto_hash_sha512_init',
                                'crypto_hash_sha512_update',
                                'crypto_kdf_derive_from_key',
                                'crypto_kdf_keygen',
                                'crypto_kx_client_session_keys',
                                'crypto_kx_keypair',
                                'crypto_kx_seed_keypair',
                                'crypto_kx_server_session_keys',
                                'crypto_onetimeauth',
                                'crypto_onetimeauth_final',
                                'crypto_onetimeauth_init',
                                'crypto_onetimeauth_keygen',
                                'crypto_onetimeauth_update',
                                'crypto_onetimeauth_verify',
                                'crypto_pwhash',
                                'crypto_pwhash_scryptsalsa208sha256',
                                'crypto_pwhash_scryptsalsa208sha256_ll',
                                'crypto_pwhash_scryptsalsa208sha256_str',
                                'crypto_pwhash_scryptsalsa208sha256_str_verify',
                                'crypto_pwhash_str',
                                'crypto_pwhash_str_needs_rehash',
                                'crypto_pwhash_str_verify',
                                'crypto_scalarmult',
                                'crypto_scalarmult_base',
                                'crypto_scalarmult_ed25519',
                                'crypto_scalarmult_ed25519_base',
                                'crypto_scalarmult_ed25519_base_noclamp',
                                'crypto_scalarmult_ed25519_noclamp',
                                'crypto_scalarmult_ristretto255',
                                'crypto_scalarmult_ristretto255_base',
                                'crypto_secretbox_detached',
                                'crypto_secretbox_easy',
                                'crypto_secretbox_keygen',
                                'crypto_secretbox_open_detached',
                                'crypto_secretbox_open_easy',
                                'crypto_secretstream_xchacha20poly1305_init_pull',
                                'crypto_secretstream_xchacha20poly1305_init_push',
                                'crypto_secretstream_xchacha20poly1305_keygen',
                                'crypto_secretstream_xchacha20poly1305_pull',
                                'crypto_secretstream_xchacha20poly1305_push',
                                'crypto_secretstream_xchacha20poly1305_rekey',
                                'crypto_shorthash',
                                'crypto_shorthash_keygen',
                                'crypto_shorthash_siphashx24',
                                'crypto_sign',
                                'crypto_sign_detached',
                                'crypto_sign_ed25519_pk_to_curve25519',
                                'crypto_sign_ed25519_sk_to_curve25519',
                                'crypto_sign_ed25519_sk_to_pk',
                                'crypto_sign_ed25519_sk_to_seed',
                                'crypto_sign_final_create',
                                'crypto_sign_final_verify',
                                'crypto_sign_init',
                                'crypto_sign_keypair',
                                'crypto_sign_open',
                                'crypto_sign_seed_keypair',
                                'crypto_sign_update',
                                'crypto_sign_verify_detached',
                                'crypto_stream_chacha20',
                                'crypto_stream_chacha20_ietf_xor',
                                'crypto_stream_chacha20_ietf_xor_ic',
                                'crypto_stream_chacha20_keygen',
                                'crypto_stream_chacha20_xor',
                                'crypto_stream_chacha20_xor_ic',
                                'crypto_stream_keygen',
                                'crypto_stream_xchacha20_keygen',
                                'crypto_stream_xchacha20_xor',
                                'crypto_stream_xchacha20_xor_ic',
                                'randombytes_buf',
                                'randombytes_buf_deterministic',
                                'randombytes_close',
                                'randombytes_random',
                                'randombytes_set_implementation',
                                'randombytes_stir',
                                'randombytes_uniform',
                                'sodium_version_string',
                            ],
                            a = [
                                x,
                                k,
                                S,
                                T,
                                w,
                                Y,
                                B,
                                A,
                                K,
                                M,
                                I,
                                N,
                                L,
                                U,
                                O,
                                C,
                                R,
                                P,
                                G,
                                X,
                                D,
                                F,
                                V,
                                H,
                                q,
                                j,
                                z,
                                W,
                                J,
                                Q,
                                Z,
                                $,
                                ee,
                                re,
                                te,
                                ae,
                                _e,
                                se,
                                ne,
                                ce,
                                oe,
                                he,
                                pe,
                                ye,
                                ie,
                                le,
                                ue,
                                de,
                                ve,
                                ge,
                                be,
                                fe,
                                me,
                                Ee,
                                xe,
                                ke,
                                Se,
                                Te,
                                we,
                                Ye,
                                Be,
                                Ae,
                                Ke,
                                Me,
                                Ie,
                                Ne,
                                Le,
                                Ue,
                                Oe,
                                Ce,
                                Re,
                                Pe,
                                Ge,
                                Xe,
                                De,
                                Fe,
                                Ve,
                                He,
                                qe,
                                je,
                                ze,
                                We,
                                Je,
                                Qe,
                                Ze,
                                $e,
                                er,
                                rr,
                                tr,
                                ar,
                                _r,
                                sr,
                                nr,
                                cr,
                                or,
                                hr,
                                pr,
                                yr,
                                ir,
                                lr,
                                ur,
                                dr,
                                vr,
                                gr,
                                br,
                                fr,
                                mr,
                                Er,
                                xr,
                                kr,
                                Sr,
                                Tr,
                                wr,
                                Yr,
                                Br,
                                Ar,
                                Kr,
                                Mr,
                                Ir,
                                Nr,
                                Lr,
                                Ur,
                                Or,
                                Cr,
                                Rr,
                                Pr,
                                Gr,
                                Xr,
                                Dr,
                                Fr,
                                Vr,
                                Hr,
                                qr,
                                jr,
                                zr,
                                Wr,
                                Jr,
                                Qr,
                                Zr,
                                $r,
                                et,
                                rt,
                                tt,
                                at,
                                _t,
                                st,
                                nt,
                                ct,
                                ot,
                                ht,
                                pt,
                                yt,
                                it,
                                lt,
                                ut,
                                dt,
                                vt,
                                gt,
                                bt,
                                ft,
                                mt,
                                Et,
                            ],
                            _ = 0;
                        _ < a.length;
                        _++
                    )
                        'function' == typeof t['_' + r[_]] && (e[r[_]] = a[_]);
                    var s = [
                        'SODIUM_LIBRARY_VERSION_MAJOR',
                        'SODIUM_LIBRARY_VERSION_MINOR',
                        'crypto_aead_chacha20poly1305_ABYTES',
                        'crypto_aead_chacha20poly1305_IETF_ABYTES',
                        'crypto_aead_chacha20poly1305_IETF_KEYBYTES',
                        'crypto_aead_chacha20poly1305_IETF_MESSAGEBYTES_MAX',
                        'crypto_aead_chacha20poly1305_IETF_NPUBBYTES',
                        'crypto_aead_chacha20poly1305_IETF_NSECBYTES',
                        'crypto_aead_chacha20poly1305_KEYBYTES',
                        'crypto_aead_chacha20poly1305_MESSAGEBYTES_MAX',
                        'crypto_aead_chacha20poly1305_NPUBBYTES',
                        'crypto_aead_chacha20poly1305_NSECBYTES',
                        'crypto_aead_chacha20poly1305_ietf_ABYTES',
                        'crypto_aead_chacha20poly1305_ietf_KEYBYTES',
                        'crypto_aead_chacha20poly1305_ietf_MESSAGEBYTES_MAX',
                        'crypto_aead_chacha20poly1305_ietf_NPUBBYTES',
                        'crypto_aead_chacha20poly1305_ietf_NSECBYTES',
                        'crypto_aead_xchacha20poly1305_IETF_ABYTES',
                        'crypto_aead_xchacha20poly1305_IETF_KEYBYTES',
                        'crypto_aead_xchacha20poly1305_IETF_MESSAGEBYTES_MAX',
                        'crypto_aead_xchacha20poly1305_IETF_NPUBBYTES',
                        'crypto_aead_xchacha20poly1305_IETF_NSECBYTES',
                        'crypto_aead_xchacha20poly1305_ietf_ABYTES',
                        'crypto_aead_xchacha20poly1305_ietf_KEYBYTES',
                        'crypto_aead_xchacha20poly1305_ietf_MESSAGEBYTES_MAX',
                        'crypto_aead_xchacha20poly1305_ietf_NPUBBYTES',
                        'crypto_aead_xchacha20poly1305_ietf_NSECBYTES',
                        'crypto_auth_BYTES',
                        'crypto_auth_KEYBYTES',
                        'crypto_auth_hmacsha256_BYTES',
                        'crypto_auth_hmacsha256_KEYBYTES',
                        'crypto_auth_hmacsha512256_BYTES',
                        'crypto_auth_hmacsha512256_KEYBYTES',
                        'crypto_auth_hmacsha512_BYTES',
                        'crypto_auth_hmacsha512_KEYBYTES',
                        'crypto_box_BEFORENMBYTES',
                        'crypto_box_MACBYTES',
                        'crypto_box_MESSAGEBYTES_MAX',
                        'crypto_box_NONCEBYTES',
                        'crypto_box_PUBLICKEYBYTES',
                        'crypto_box_SEALBYTES',
                        'crypto_box_SECRETKEYBYTES',
                        'crypto_box_SEEDBYTES',
                        'crypto_box_curve25519xchacha20poly1305_BEFORENMBYTES',
                        'crypto_box_curve25519xchacha20poly1305_MACBYTES',
                        'crypto_box_curve25519xchacha20poly1305_MESSAGEBYTES_MAX',
                        'crypto_box_curve25519xchacha20poly1305_NONCEBYTES',
                        'crypto_box_curve25519xchacha20poly1305_PUBLICKEYBYTES',
                        'crypto_box_curve25519xchacha20poly1305_SEALBYTES',
                        'crypto_box_curve25519xchacha20poly1305_SECRETKEYBYTES',
                        'crypto_box_curve25519xchacha20poly1305_SEEDBYTES',
                        'crypto_box_curve25519xsalsa20poly1305_BEFORENMBYTES',
                        'crypto_box_curve25519xsalsa20poly1305_MACBYTES',
                        'crypto_box_curve25519xsalsa20poly1305_MESSAGEBYTES_MAX',
                        'crypto_box_curve25519xsalsa20poly1305_NONCEBYTES',
                        'crypto_box_curve25519xsalsa20poly1305_PUBLICKEYBYTES',
                        'crypto_box_curve25519xsalsa20poly1305_SECRETKEYBYTES',
                        'crypto_box_curve25519xsalsa20poly1305_SEEDBYTES',
                        'crypto_core_ed25519_BYTES',
                        'crypto_core_ed25519_HASHBYTES',
                        'crypto_core_ed25519_NONREDUCEDSCALARBYTES',
                        'crypto_core_ed25519_SCALARBYTES',
                        'crypto_core_ed25519_UNIFORMBYTES',
                        'crypto_core_hchacha20_CONSTBYTES',
                        'crypto_core_hchacha20_INPUTBYTES',
                        'crypto_core_hchacha20_KEYBYTES',
                        'crypto_core_hchacha20_OUTPUTBYTES',
                        'crypto_core_hsalsa20_CONSTBYTES',
                        'crypto_core_hsalsa20_INPUTBYTES',
                        'crypto_core_hsalsa20_KEYBYTES',
                        'crypto_core_hsalsa20_OUTPUTBYTES',
                        'crypto_core_ristretto255_BYTES',
                        'crypto_core_ristretto255_HASHBYTES',
                        'crypto_core_ristretto255_NONREDUCEDSCALARBYTES',
                        'crypto_core_ristretto255_SCALARBYTES',
                        'crypto_core_salsa2012_CONSTBYTES',
                        'crypto_core_salsa2012_INPUTBYTES',
                        'crypto_core_salsa2012_KEYBYTES',
                        'crypto_core_salsa2012_OUTPUTBYTES',
                        'crypto_core_salsa20_CONSTBYTES',
                        'crypto_core_salsa20_INPUTBYTES',
                        'crypto_core_salsa20_KEYBYTES',
                        'crypto_core_salsa20_OUTPUTBYTES',
                        'crypto_generichash_BYTES',
                        'crypto_generichash_BYTES_MAX',
                        'crypto_generichash_BYTES_MIN',
                        'crypto_generichash_KEYBYTES',
                        'crypto_generichash_KEYBYTES_MAX',
                        'crypto_generichash_KEYBYTES_MIN',
                        'crypto_generichash_blake2b_BYTES',
                        'crypto_generichash_blake2b_BYTES_MAX',
                        'crypto_generichash_blake2b_BYTES_MIN',
                        'crypto_generichash_blake2b_KEYBYTES',
                        'crypto_generichash_blake2b_KEYBYTES_MAX',
                        'crypto_generichash_blake2b_KEYBYTES_MIN',
                        'crypto_generichash_blake2b_PERSONALBYTES',
                        'crypto_generichash_blake2b_SALTBYTES',
                        'crypto_hash_BYTES',
                        'crypto_hash_sha256_BYTES',
                        'crypto_hash_sha512_BYTES',
                        'crypto_kdf_BYTES_MAX',
                        'crypto_kdf_BYTES_MIN',
                        'crypto_kdf_CONTEXTBYTES',
                        'crypto_kdf_KEYBYTES',
                        'crypto_kdf_blake2b_BYTES_MAX',
                        'crypto_kdf_blake2b_BYTES_MIN',
                        'crypto_kdf_blake2b_CONTEXTBYTES',
                        'crypto_kdf_blake2b_KEYBYTES',
                        'crypto_kx_PUBLICKEYBYTES',
                        'crypto_kx_SECRETKEYBYTES',
                        'crypto_kx_SEEDBYTES',
                        'crypto_kx_SESSIONKEYBYTES',
                        'crypto_onetimeauth_BYTES',
                        'crypto_onetimeauth_KEYBYTES',
                        'crypto_onetimeauth_poly1305_BYTES',
                        'crypto_onetimeauth_poly1305_KEYBYTES',
                        'crypto_pwhash_ALG_ARGON2I13',
                        'crypto_pwhash_ALG_ARGON2ID13',
                        'crypto_pwhash_ALG_DEFAULT',
                        'crypto_pwhash_BYTES_MAX',
                        'crypto_pwhash_BYTES_MIN',
                        'crypto_pwhash_MEMLIMIT_INTERACTIVE',
                        'crypto_pwhash_MEMLIMIT_MAX',
                        'crypto_pwhash_MEMLIMIT_MIN',
                        'crypto_pwhash_MEMLIMIT_MODERATE',
                        'crypto_pwhash_MEMLIMIT_SENSITIVE',
                        'crypto_pwhash_OPSLIMIT_INTERACTIVE',
                        'crypto_pwhash_OPSLIMIT_MAX',
                        'crypto_pwhash_OPSLIMIT_MIN',
                        'crypto_pwhash_OPSLIMIT_MODERATE',
                        'crypto_pwhash_OPSLIMIT_SENSITIVE',
                        'crypto_pwhash_PASSWD_MAX',
                        'crypto_pwhash_PASSWD_MIN',
                        'crypto_pwhash_SALTBYTES',
                        'crypto_pwhash_STRBYTES',
                        'crypto_pwhash_argon2i_BYTES_MAX',
                        'crypto_pwhash_argon2i_BYTES_MIN',
                        'crypto_pwhash_argon2i_SALTBYTES',
                        'crypto_pwhash_argon2i_STRBYTES',
                        'crypto_pwhash_argon2id_BYTES_MAX',
                        'crypto_pwhash_argon2id_BYTES_MIN',
                        'crypto_pwhash_argon2id_SALTBYTES',
                        'crypto_pwhash_argon2id_STRBYTES',
                        'crypto_pwhash_scryptsalsa208sha256_BYTES_MAX',
                        'crypto_pwhash_scryptsalsa208sha256_BYTES_MIN',
                        'crypto_pwhash_scryptsalsa208sha256_MEMLIMIT_INTERACTIVE',
                        'crypto_pwhash_scryptsalsa208sha256_MEMLIMIT_MAX',
                        'crypto_pwhash_scryptsalsa208sha256_MEMLIMIT_MIN',
                        'crypto_pwhash_scryptsalsa208sha256_MEMLIMIT_SENSITIVE',
                        'crypto_pwhash_scryptsalsa208sha256_OPSLIMIT_INTERACTIVE',
                        'crypto_pwhash_scryptsalsa208sha256_OPSLIMIT_MAX',
                        'crypto_pwhash_scryptsalsa208sha256_OPSLIMIT_MIN',
                        'crypto_pwhash_scryptsalsa208sha256_OPSLIMIT_SENSITIVE',
                        'crypto_pwhash_scryptsalsa208sha256_SALTBYTES',
                        'crypto_pwhash_scryptsalsa208sha256_STRBYTES',
                        'crypto_scalarmult_BYTES',
                        'crypto_scalarmult_SCALARBYTES',
                        'crypto_scalarmult_curve25519_BYTES',
                        'crypto_scalarmult_curve25519_SCALARBYTES',
                        'crypto_scalarmult_ed25519_BYTES',
                        'crypto_scalarmult_ed25519_SCALARBYTES',
                        'crypto_scalarmult_ristretto255_BYTES',
                        'crypto_scalarmult_ristretto255_SCALARBYTES',
                        'crypto_secretbox_KEYBYTES',
                        'crypto_secretbox_MACBYTES',
                        'crypto_secretbox_MESSAGEBYTES_MAX',
                        'crypto_secretbox_NONCEBYTES',
                        'crypto_secretbox_xchacha20poly1305_KEYBYTES',
                        'crypto_secretbox_xchacha20poly1305_MACBYTES',
                        'crypto_secretbox_xchacha20poly1305_MESSAGEBYTES_MAX',
                        'crypto_secretbox_xchacha20poly1305_NONCEBYTES',
                        'crypto_secretbox_xsalsa20poly1305_KEYBYTES',
                        'crypto_secretbox_xsalsa20poly1305_MACBYTES',
                        'crypto_secretbox_xsalsa20poly1305_MESSAGEBYTES_MAX',
                        'crypto_secretbox_xsalsa20poly1305_NONCEBYTES',
                        'crypto_secretstream_xchacha20poly1305_ABYTES',
                        'crypto_secretstream_xchacha20poly1305_HEADERBYTES',
                        'crypto_secretstream_xchacha20poly1305_KEYBYTES',
                        'crypto_secretstream_xchacha20poly1305_MESSAGEBYTES_MAX',
                        'crypto_secretstream_xchacha20poly1305_TAG_FINAL',
                        'crypto_secretstream_xchacha20poly1305_TAG_MESSAGE',
                        'crypto_secretstream_xchacha20poly1305_TAG_PUSH',
                        'crypto_secretstream_xchacha20poly1305_TAG_REKEY',
                        'crypto_shorthash_BYTES',
                        'crypto_shorthash_KEYBYTES',
                        'crypto_shorthash_siphash24_BYTES',
                        'crypto_shorthash_siphash24_KEYBYTES',
                        'crypto_shorthash_siphashx24_BYTES',
                        'crypto_shorthash_siphashx24_KEYBYTES',
                        'crypto_sign_BYTES',
                        'crypto_sign_MESSAGEBYTES_MAX',
                        'crypto_sign_PUBLICKEYBYTES',
                        'crypto_sign_SECRETKEYBYTES',
                        'crypto_sign_SEEDBYTES',
                        'crypto_sign_ed25519_BYTES',
                        'crypto_sign_ed25519_MESSAGEBYTES_MAX',
                        'crypto_sign_ed25519_PUBLICKEYBYTES',
                        'crypto_sign_ed25519_SECRETKEYBYTES',
                        'crypto_sign_ed25519_SEEDBYTES',
                        'crypto_stream_KEYBYTES',
                        'crypto_stream_MESSAGEBYTES_MAX',
                        'crypto_stream_NONCEBYTES',
                        'crypto_stream_chacha20_IETF_KEYBYTES',
                        'crypto_stream_chacha20_IETF_MESSAGEBYTES_MAX',
                        'crypto_stream_chacha20_IETF_NONCEBYTES',
                        'crypto_stream_chacha20_KEYBYTES',
                        'crypto_stream_chacha20_MESSAGEBYTES_MAX',
                        'crypto_stream_chacha20_NONCEBYTES',
                        'crypto_stream_chacha20_ietf_KEYBYTES',
                        'crypto_stream_chacha20_ietf_MESSAGEBYTES_MAX',
                        'crypto_stream_chacha20_ietf_NONCEBYTES',
                        'crypto_stream_salsa2012_KEYBYTES',
                        'crypto_stream_salsa2012_MESSAGEBYTES_MAX',
                        'crypto_stream_salsa2012_NONCEBYTES',
                        'crypto_stream_salsa208_KEYBYTES',
                        'crypto_stream_salsa208_MESSAGEBYTES_MAX',
                        'crypto_stream_salsa208_NONCEBYTES',
                        'crypto_stream_salsa20_KEYBYTES',
                        'crypto_stream_salsa20_MESSAGEBYTES_MAX',
                        'crypto_stream_salsa20_NONCEBYTES',
                        'crypto_stream_xchacha20_KEYBYTES',
                        'crypto_stream_xchacha20_MESSAGEBYTES_MAX',
                        'crypto_stream_xchacha20_NONCEBYTES',
                        'crypto_stream_xsalsa20_KEYBYTES',
                        'crypto_stream_xsalsa20_MESSAGEBYTES_MAX',
                        'crypto_stream_xsalsa20_NONCEBYTES',
                        'crypto_verify_16_BYTES',
                        'crypto_verify_32_BYTES',
                        'crypto_verify_64_BYTES',
                    ];
                    for (_ = 0; _ < s.length; _++)
                        'function' ==
                            typeof (c = t['_' + s[_].toLowerCase()]) &&
                            (e[s[_]] = c());
                    var n = [
                        'SODIUM_VERSION_STRING',
                        'crypto_pwhash_STRPREFIX',
                        'crypto_pwhash_scryptsalsa208sha256_STRPREFIX',
                    ];
                    for (_ = 0; _ < n.length; _++) {
                        var c;
                        'function' ==
                            typeof (c = t['_' + n[_].toLowerCase()]) &&
                            (e[n[_]] = t.UTF8ToString(c()));
                    }
                }
                t = r;
                try {
                    a();
                    var _ = new Uint8Array([98, 97, 108, 108, 115]),
                        s = e.randombytes_buf(e.crypto_secretbox_NONCEBYTES),
                        n = e.randombytes_buf(e.crypto_secretbox_KEYBYTES),
                        c = e.crypto_secretbox_easy(_, s, n),
                        o = e.crypto_secretbox_open_easy(c, s, n);
                    if (e.memcmp(_, o)) return;
                } catch (e) {
                    if (null == t.useBackupModule)
                        throw new Error('Both wasm and asm failed to load' + e);
                }
                t.useBackupModule(), a();
            });

        function s(e) {
            if ('function' == typeof TextEncoder)
                return new TextEncoder().encode(e);
            e = unescape(encodeURIComponent(e));
            for (
                var r = new Uint8Array(e.length), t = 0, a = e.length;
                t < a;
                t++
            )
                r[t] = e.charCodeAt(t);
            return r;
        }

        function n(e) {
            if ('function' == typeof TextDecoder)
                return new TextDecoder('utf-8', {
                    fatal: !0,
                }).decode(e);
            var r = 8192,
                t = Math.ceil(e.length / r);
            if (t <= 1)
                try {
                    return decodeURIComponent(
                        escape(String.fromCharCode.apply(null, e)),
                    );
                } catch (e) {
                    throw new TypeError('The encoded data was not valid.');
                }
            for (var a = '', _ = 0, s = 0; s < t; s++) {
                var c = Array.prototype.slice.call(
                    e,
                    s * r + _,
                    (s + 1) * r + _,
                );
                if (0 != c.length) {
                    var o,
                        h = c.length,
                        p = 0;
                    do {
                        var y = c[--h];
                        y >= 240
                            ? ((p = 4), (o = !0))
                            : y >= 224
                            ? ((p = 3), (o = !0))
                            : y >= 192
                            ? ((p = 2), (o = !0))
                            : y < 128 && ((p = 1), (o = !0));
                    } while (!o);
                    for (var i = p - (c.length - h), l = 0; l < i; l++)
                        _--, c.pop();
                    a += n(c);
                }
            }
            return a;
        }

        function c(e) {
            e = E(null, e, 'input');
            for (var r, t, a, _ = '', s = 0; s < e.length; s++)
                (a =
                    ((87 + (t = 15 & e[s]) + (((t - 10) >> 8) & -39)) << 8) |
                    (87 + (r = e[s] >>> 4) + (((r - 10) >> 8) & -39))),
                    (_ +=
                        String.fromCharCode(255 & a) +
                        String.fromCharCode(a >>> 8));
            return _;
        }
        var o = {
            ORIGINAL: 1,
            ORIGINAL_NO_PADDING: 3,
            URLSAFE: 5,
            URLSAFE_NO_PADDING: 7,
        };

        function h(e) {
            if (null == e) return o.URLSAFE_NO_PADDING;
            if (
                e !== o.ORIGINAL &&
                e !== o.ORIGINAL_NO_PADDING &&
                e !== o.URLSAFE &&
                e != o.URLSAFE_NO_PADDING
            )
                throw new Error('unsupported base64 variant');
            return e;
        }

        function p(e, r) {
            (r = h(r)), (e = E(_, e, 'input'));
            var a,
                _ = [],
                s = 0 | Math.floor(e.length / 3),
                c = e.length - 3 * s,
                o = 4 * s + (0 !== c ? (0 == (2 & r) ? 4 : 2 + (c >>> 1)) : 0),
                p = new u(o + 1),
                y = d(e);
            return (
                _.push(y),
                _.push(p.address),
                0 ===
                    t._sodium_bin2base64(p.address, p.length, y, e.length, r) &&
                    b(_, 'conversion failed'),
                (p.length = o),
                (a = n(p.to_Uint8Array())),
                g(_),
                a
            );
        }

        function y(e, r) {
            var t = r || a;
            if (!i(t)) throw new Error(t + ' output format is not available');
            if (e instanceof u) {
                if ('uint8array' === t) return e.to_Uint8Array();
                if ('text' === t) return n(e.to_Uint8Array());
                if ('hex' === t) return c(e.to_Uint8Array());
                if ('base64' === t)
                    return p(e.to_Uint8Array(), o.URLSAFE_NO_PADDING);
                throw new Error('What is output format "' + t + '"?');
            }
            if ('object' == typeof e) {
                for (var _ = Object.keys(e), s = {}, h = 0; h < _.length; h++)
                    s[_[h]] = y(e[_[h]], t);
                return s;
            }
            if ('string' == typeof e) return e;
            throw new TypeError('Cannot format output');
        }

        function i(e) {
            for (
                var r = ['uint8array', 'text', 'hex', 'base64'], t = 0;
                t < r.length;
                t++
            )
                if (r[t] === e) return !0;
            return !1;
        }

        function l(e) {
            if (e) {
                if ('string' != typeof e)
                    throw new TypeError(
                        'When defined, the output format must be a string',
                    );
                if (!i(e))
                    throw new Error(e + ' is not a supported output format');
            }
        }

        function u(e) {
            (this.length = e), (this.address = v(e));
        }

        function d(e) {
            var r = v(e.length);
            return t.HEAPU8.set(e, r), r;
        }

        function v(e) {
            var r = t._malloc(e);
            if (0 === r)
                throw {
                    message: '_malloc() failed',
                    length: e,
                };
            return r;
        }

        function g(e) {
            if (e) for (var r = 0; r < e.length; r++) (a = e[r]), t._free(a);
            var a;
        }

        function b(e, r) {
            throw (g(e), new Error(r));
        }

        function f(e, r) {
            throw (g(e), new TypeError(r));
        }

        function m(e, r, t) {
            null == r && f(e, t + ' cannot be null or undefined');
        }

        function E(e, r, t) {
            return (
                m(e, r, t),
                r instanceof Uint8Array
                    ? r
                    : 'string' == typeof r
                    ? s(r)
                    : void f(e, 'unsupported input type for ' + t)
            );
        }

        function x(e, r, a, _, s, n) {
            var c = [];
            l(n);
            var o = null;
            null != e &&
                ((o = d((e = E(c, e, 'secret_nonce')))), e.length, c.push(o)),
                (r = E(c, r, 'ciphertext'));
            var h,
                p = t._crypto_aead_chacha20poly1305_abytes(),
                i = r.length;
            i < p && f(c, 'ciphertext is too short'), (h = d(r)), c.push(h);
            var v = null,
                m = 0;
            null != a &&
                ((v = d((a = E(c, a, 'additional_data')))),
                (m = a.length),
                c.push(v)),
                (_ = E(c, _, 'public_nonce'));
            var x,
                k = 0 | t._crypto_aead_chacha20poly1305_npubbytes();
            _.length !== k && f(c, 'invalid public_nonce length'),
                (x = d(_)),
                c.push(x),
                (s = E(c, s, 'key'));
            var S,
                T = 0 | t._crypto_aead_chacha20poly1305_keybytes();
            s.length !== T && f(c, 'invalid key length'), (S = d(s)), c.push(S);
            var w = new u((i - t._crypto_aead_chacha20poly1305_abytes()) | 0),
                Y = w.address;
            if (
                (c.push(Y),
                0 ===
                    t._crypto_aead_chacha20poly1305_decrypt(
                        Y,
                        null,
                        o,
                        h,
                        i,
                        0,
                        v,
                        m,
                        0,
                        x,
                        S,
                    ))
            ) {
                var B = y(w, n);
                return g(c), B;
            }
            b(c, 'ciphertext cannot be decrypted using that key');
        }

        function k(e, r, a, _, s, n, c) {
            var o = [];
            l(c);
            var h = null;
            null != e &&
                ((h = d((e = E(o, e, 'secret_nonce')))), e.length, o.push(h));
            var p = d((r = E(o, r, 'ciphertext'))),
                i = r.length;
            o.push(p), (a = E(o, a, 'mac'));
            var v,
                m = 0 | t._crypto_box_macbytes();
            a.length !== m && f(o, 'invalid mac length'), (v = d(a)), o.push(v);
            var x = null,
                k = 0;
            null != _ &&
                ((x = d((_ = E(o, _, 'additional_data')))),
                (k = _.length),
                o.push(x)),
                (s = E(o, s, 'public_nonce'));
            var S,
                T = 0 | t._crypto_aead_chacha20poly1305_npubbytes();
            s.length !== T && f(o, 'invalid public_nonce length'),
                (S = d(s)),
                o.push(S),
                (n = E(o, n, 'key'));
            var w,
                Y = 0 | t._crypto_aead_chacha20poly1305_keybytes();
            n.length !== Y && f(o, 'invalid key length'), (w = d(n)), o.push(w);
            var B = new u(0 | i),
                A = B.address;
            if (
                (o.push(A),
                0 ===
                    t._crypto_aead_chacha20poly1305_decrypt_detached(
                        A,
                        h,
                        p,
                        i,
                        0,
                        v,
                        x,
                        k,
                        0,
                        S,
                        w,
                    ))
            ) {
                var K = y(B, c);
                return g(o), K;
            }
            b(o, 'ciphertext cannot be decrypted using that key');
        }

        function S(e, r, a, _, s, n) {
            var c = [];
            l(n);
            var o = d((e = E(c, e, 'message'))),
                h = e.length;
            c.push(o);
            var p = null,
                i = 0;
            null != r &&
                ((p = d((r = E(c, r, 'additional_data')))),
                (i = r.length),
                c.push(p));
            var v = null;
            null != a &&
                ((v = d((a = E(c, a, 'secret_nonce')))), a.length, c.push(v)),
                (_ = E(c, _, 'public_nonce'));
            var m,
                x = 0 | t._crypto_aead_chacha20poly1305_npubbytes();
            _.length !== x && f(c, 'invalid public_nonce length'),
                (m = d(_)),
                c.push(m),
                (s = E(c, s, 'key'));
            var k,
                S = 0 | t._crypto_aead_chacha20poly1305_keybytes();
            s.length !== S && f(c, 'invalid key length'), (k = d(s)), c.push(k);
            var T = new u((h + t._crypto_aead_chacha20poly1305_abytes()) | 0),
                w = T.address;
            if (
                (c.push(w),
                0 ===
                    t._crypto_aead_chacha20poly1305_encrypt(
                        w,
                        null,
                        o,
                        h,
                        0,
                        p,
                        i,
                        0,
                        v,
                        m,
                        k,
                    ))
            ) {
                var Y = y(T, n);
                return g(c), Y;
            }
            b(c, 'invalid usage');
        }

        function T(e, r, a, _, s, n) {
            var c = [];
            l(n);
            var o = d((e = E(c, e, 'message'))),
                h = e.length;
            c.push(o);
            var p = null,
                i = 0;
            null != r &&
                ((p = d((r = E(c, r, 'additional_data')))),
                (i = r.length),
                c.push(p));
            var v = null;
            null != a &&
                ((v = d((a = E(c, a, 'secret_nonce')))), a.length, c.push(v)),
                (_ = E(c, _, 'public_nonce'));
            var m,
                x = 0 | t._crypto_aead_chacha20poly1305_npubbytes();
            _.length !== x && f(c, 'invalid public_nonce length'),
                (m = d(_)),
                c.push(m),
                (s = E(c, s, 'key'));
            var k,
                S = 0 | t._crypto_aead_chacha20poly1305_keybytes();
            s.length !== S && f(c, 'invalid key length'), (k = d(s)), c.push(k);
            var T = new u(0 | h),
                w = T.address;
            c.push(w);
            var Y = new u(0 | t._crypto_aead_chacha20poly1305_abytes()),
                B = Y.address;
            if (
                (c.push(B),
                0 ===
                    t._crypto_aead_chacha20poly1305_encrypt_detached(
                        w,
                        B,
                        null,
                        o,
                        h,
                        0,
                        p,
                        i,
                        0,
                        v,
                        m,
                        k,
                    ))
            ) {
                var A = y(
                    {
                        ciphertext: T,
                        mac: Y,
                    },
                    n,
                );
                return g(c), A;
            }
            b(c, 'invalid usage');
        }

        function w(e, r, a, _, s, n) {
            var c = [];
            l(n);
            var o = null;
            null != e &&
                ((o = d((e = E(c, e, 'secret_nonce')))), e.length, c.push(o)),
                (r = E(c, r, 'ciphertext'));
            var h,
                p = t._crypto_aead_chacha20poly1305_ietf_abytes(),
                i = r.length;
            i < p && f(c, 'ciphertext is too short'), (h = d(r)), c.push(h);
            var v = null,
                m = 0;
            null != a &&
                ((v = d((a = E(c, a, 'additional_data')))),
                (m = a.length),
                c.push(v)),
                (_ = E(c, _, 'public_nonce'));
            var x,
                k = 0 | t._crypto_aead_chacha20poly1305_ietf_npubbytes();
            _.length !== k && f(c, 'invalid public_nonce length'),
                (x = d(_)),
                c.push(x),
                (s = E(c, s, 'key'));
            var S,
                T = 0 | t._crypto_aead_chacha20poly1305_ietf_keybytes();
            s.length !== T && f(c, 'invalid key length'), (S = d(s)), c.push(S);
            var w = new u(
                    (i - t._crypto_aead_chacha20poly1305_ietf_abytes()) | 0,
                ),
                Y = w.address;
            if (
                (c.push(Y),
                0 ===
                    t._crypto_aead_chacha20poly1305_ietf_decrypt(
                        Y,
                        null,
                        o,
                        h,
                        i,
                        0,
                        v,
                        m,
                        0,
                        x,
                        S,
                    ))
            ) {
                var B = y(w, n);
                return g(c), B;
            }
            b(c, 'ciphertext cannot be decrypted using that key');
        }

        function Y(e, r, a, _, s, n, c) {
            var o = [];
            l(c);
            var h = null;
            null != e &&
                ((h = d((e = E(o, e, 'secret_nonce')))), e.length, o.push(h));
            var p = d((r = E(o, r, 'ciphertext'))),
                i = r.length;
            o.push(p), (a = E(o, a, 'mac'));
            var v,
                m = 0 | t._crypto_box_macbytes();
            a.length !== m && f(o, 'invalid mac length'), (v = d(a)), o.push(v);
            var x = null,
                k = 0;
            null != _ &&
                ((x = d((_ = E(o, _, 'additional_data')))),
                (k = _.length),
                o.push(x)),
                (s = E(o, s, 'public_nonce'));
            var S,
                T = 0 | t._crypto_aead_chacha20poly1305_ietf_npubbytes();
            s.length !== T && f(o, 'invalid public_nonce length'),
                (S = d(s)),
                o.push(S),
                (n = E(o, n, 'key'));
            var w,
                Y = 0 | t._crypto_aead_chacha20poly1305_ietf_keybytes();
            n.length !== Y && f(o, 'invalid key length'), (w = d(n)), o.push(w);
            var B = new u(0 | i),
                A = B.address;
            if (
                (o.push(A),
                0 ===
                    t._crypto_aead_chacha20poly1305_ietf_decrypt_detached(
                        A,
                        h,
                        p,
                        i,
                        0,
                        v,
                        x,
                        k,
                        0,
                        S,
                        w,
                    ))
            ) {
                var K = y(B, c);
                return g(o), K;
            }
            b(o, 'ciphertext cannot be decrypted using that key');
        }

        function B(e, r, a, _, s, n) {
            var c = [];
            l(n);
            var o = d((e = E(c, e, 'message'))),
                h = e.length;
            c.push(o);
            var p = null,
                i = 0;
            null != r &&
                ((p = d((r = E(c, r, 'additional_data')))),
                (i = r.length),
                c.push(p));
            var v = null;
            null != a &&
                ((v = d((a = E(c, a, 'secret_nonce')))), a.length, c.push(v)),
                (_ = E(c, _, 'public_nonce'));
            var m,
                x = 0 | t._crypto_aead_chacha20poly1305_ietf_npubbytes();
            _.length !== x && f(c, 'invalid public_nonce length'),
                (m = d(_)),
                c.push(m),
                (s = E(c, s, 'key'));
            var k,
                S = 0 | t._crypto_aead_chacha20poly1305_ietf_keybytes();
            s.length !== S && f(c, 'invalid key length'), (k = d(s)), c.push(k);
            var T = new u(
                    (h + t._crypto_aead_chacha20poly1305_ietf_abytes()) | 0,
                ),
                w = T.address;
            if (
                (c.push(w),
                0 ===
                    t._crypto_aead_chacha20poly1305_ietf_encrypt(
                        w,
                        null,
                        o,
                        h,
                        0,
                        p,
                        i,
                        0,
                        v,
                        m,
                        k,
                    ))
            ) {
                var Y = y(T, n);
                return g(c), Y;
            }
            b(c, 'invalid usage');
        }

        function A(e, r, a, _, s, n) {
            var c = [];
            l(n);
            var o = d((e = E(c, e, 'message'))),
                h = e.length;
            c.push(o);
            var p = null,
                i = 0;
            null != r &&
                ((p = d((r = E(c, r, 'additional_data')))),
                (i = r.length),
                c.push(p));
            var v = null;
            null != a &&
                ((v = d((a = E(c, a, 'secret_nonce')))), a.length, c.push(v)),
                (_ = E(c, _, 'public_nonce'));
            var m,
                x = 0 | t._crypto_aead_chacha20poly1305_ietf_npubbytes();
            _.length !== x && f(c, 'invalid public_nonce length'),
                (m = d(_)),
                c.push(m),
                (s = E(c, s, 'key'));
            var k,
                S = 0 | t._crypto_aead_chacha20poly1305_ietf_keybytes();
            s.length !== S && f(c, 'invalid key length'), (k = d(s)), c.push(k);
            var T = new u(0 | h),
                w = T.address;
            c.push(w);
            var Y = new u(0 | t._crypto_aead_chacha20poly1305_ietf_abytes()),
                B = Y.address;
            if (
                (c.push(B),
                0 ===
                    t._crypto_aead_chacha20poly1305_ietf_encrypt_detached(
                        w,
                        B,
                        null,
                        o,
                        h,
                        0,
                        p,
                        i,
                        0,
                        v,
                        m,
                        k,
                    ))
            ) {
                var A = y(
                    {
                        ciphertext: T,
                        mac: Y,
                    },
                    n,
                );
                return g(c), A;
            }
            b(c, 'invalid usage');
        }

        function K(e) {
            var r = [];
            l(e);
            var a = new u(0 | t._crypto_aead_chacha20poly1305_ietf_keybytes()),
                _ = a.address;
            r.push(_), t._crypto_aead_chacha20poly1305_ietf_keygen(_);
            var s = y(a, e);
            return g(r), s;
        }

        function M(e) {
            var r = [];
            l(e);
            var a = new u(0 | t._crypto_aead_chacha20poly1305_keybytes()),
                _ = a.address;
            r.push(_), t._crypto_aead_chacha20poly1305_keygen(_);
            var s = y(a, e);
            return g(r), s;
        }

        function I(e, r, a, _, s, n) {
            var c = [];
            l(n);
            var o = null;
            null != e &&
                ((o = d((e = E(c, e, 'secret_nonce')))), e.length, c.push(o)),
                (r = E(c, r, 'ciphertext'));
            var h,
                p = t._crypto_aead_xchacha20poly1305_ietf_abytes(),
                i = r.length;
            i < p && f(c, 'ciphertext is too short'), (h = d(r)), c.push(h);
            var v = null,
                m = 0;
            null != a &&
                ((v = d((a = E(c, a, 'additional_data')))),
                (m = a.length),
                c.push(v)),
                (_ = E(c, _, 'public_nonce'));
            var x,
                k = 0 | t._crypto_aead_xchacha20poly1305_ietf_npubbytes();
            _.length !== k && f(c, 'invalid public_nonce length'),
                (x = d(_)),
                c.push(x),
                (s = E(c, s, 'key'));
            var S,
                T = 0 | t._crypto_aead_xchacha20poly1305_ietf_keybytes();
            s.length !== T && f(c, 'invalid key length'), (S = d(s)), c.push(S);
            var w = new u(
                    (i - t._crypto_aead_xchacha20poly1305_ietf_abytes()) | 0,
                ),
                Y = w.address;
            if (
                (c.push(Y),
                0 ===
                    t._crypto_aead_xchacha20poly1305_ietf_decrypt(
                        Y,
                        null,
                        o,
                        h,
                        i,
                        0,
                        v,
                        m,
                        0,
                        x,
                        S,
                    ))
            ) {
                var B = y(w, n);
                return g(c), B;
            }
            b(c, 'ciphertext cannot be decrypted using that key');
        }

        function N(e, r, a, _, s, n, c) {
            var o = [];
            l(c);
            var h = null;
            null != e &&
                ((h = d((e = E(o, e, 'secret_nonce')))), e.length, o.push(h));
            var p = d((r = E(o, r, 'ciphertext'))),
                i = r.length;
            o.push(p), (a = E(o, a, 'mac'));
            var v,
                m = 0 | t._crypto_box_macbytes();
            a.length !== m && f(o, 'invalid mac length'), (v = d(a)), o.push(v);
            var x = null,
                k = 0;
            null != _ &&
                ((x = d((_ = E(o, _, 'additional_data')))),
                (k = _.length),
                o.push(x)),
                (s = E(o, s, 'public_nonce'));
            var S,
                T = 0 | t._crypto_aead_xchacha20poly1305_ietf_npubbytes();
            s.length !== T && f(o, 'invalid public_nonce length'),
                (S = d(s)),
                o.push(S),
                (n = E(o, n, 'key'));
            var w,
                Y = 0 | t._crypto_aead_xchacha20poly1305_ietf_keybytes();
            n.length !== Y && f(o, 'invalid key length'), (w = d(n)), o.push(w);
            var B = new u(0 | i),
                A = B.address;
            if (
                (o.push(A),
                0 ===
                    t._crypto_aead_xchacha20poly1305_ietf_decrypt_detached(
                        A,
                        h,
                        p,
                        i,
                        0,
                        v,
                        x,
                        k,
                        0,
                        S,
                        w,
                    ))
            ) {
                var K = y(B, c);
                return g(o), K;
            }
            b(o, 'ciphertext cannot be decrypted using that key');
        }

        function L(e, r, a, _, s, n) {
            var c = [];
            l(n);
            var o = d((e = E(c, e, 'message'))),
                h = e.length;
            c.push(o);
            var p = null,
                i = 0;
            null != r &&
                ((p = d((r = E(c, r, 'additional_data')))),
                (i = r.length),
                c.push(p));
            var v = null;
            null != a &&
                ((v = d((a = E(c, a, 'secret_nonce')))), a.length, c.push(v)),
                (_ = E(c, _, 'public_nonce'));
            var m,
                x = 0 | t._crypto_aead_xchacha20poly1305_ietf_npubbytes();
            _.length !== x && f(c, 'invalid public_nonce length'),
                (m = d(_)),
                c.push(m),
                (s = E(c, s, 'key'));
            var k,
                S = 0 | t._crypto_aead_xchacha20poly1305_ietf_keybytes();
            s.length !== S && f(c, 'invalid key length'), (k = d(s)), c.push(k);
            var T = new u(
                    (h + t._crypto_aead_xchacha20poly1305_ietf_abytes()) | 0,
                ),
                w = T.address;
            if (
                (c.push(w),
                0 ===
                    t._crypto_aead_xchacha20poly1305_ietf_encrypt(
                        w,
                        null,
                        o,
                        h,
                        0,
                        p,
                        i,
                        0,
                        v,
                        m,
                        k,
                    ))
            ) {
                var Y = y(T, n);
                return g(c), Y;
            }
            b(c, 'invalid usage');
        }

        function U(e, r, a, _, s, n) {
            var c = [];
            l(n);
            var o = d((e = E(c, e, 'message'))),
                h = e.length;
            c.push(o);
            var p = null,
                i = 0;
            null != r &&
                ((p = d((r = E(c, r, 'additional_data')))),
                (i = r.length),
                c.push(p));
            var v = null;
            null != a &&
                ((v = d((a = E(c, a, 'secret_nonce')))), a.length, c.push(v)),
                (_ = E(c, _, 'public_nonce'));
            var m,
                x = 0 | t._crypto_aead_xchacha20poly1305_ietf_npubbytes();
            _.length !== x && f(c, 'invalid public_nonce length'),
                (m = d(_)),
                c.push(m),
                (s = E(c, s, 'key'));
            var k,
                S = 0 | t._crypto_aead_xchacha20poly1305_ietf_keybytes();
            s.length !== S && f(c, 'invalid key length'), (k = d(s)), c.push(k);
            var T = new u(0 | h),
                w = T.address;
            c.push(w);
            var Y = new u(0 | t._crypto_aead_xchacha20poly1305_ietf_abytes()),
                B = Y.address;
            if (
                (c.push(B),
                0 ===
                    t._crypto_aead_xchacha20poly1305_ietf_encrypt_detached(
                        w,
                        B,
                        null,
                        o,
                        h,
                        0,
                        p,
                        i,
                        0,
                        v,
                        m,
                        k,
                    ))
            ) {
                var A = y(
                    {
                        ciphertext: T,
                        mac: Y,
                    },
                    n,
                );
                return g(c), A;
            }
            b(c, 'invalid usage');
        }

        function O(e) {
            var r = [];
            l(e);
            var a = new u(0 | t._crypto_aead_xchacha20poly1305_ietf_keybytes()),
                _ = a.address;
            r.push(_), t._crypto_aead_xchacha20poly1305_ietf_keygen(_);
            var s = y(a, e);
            return g(r), s;
        }

        function C(e, r, a) {
            var _ = [];
            l(a);
            var s = d((e = E(_, e, 'message'))),
                n = e.length;
            _.push(s), (r = E(_, r, 'key'));
            var c,
                o = 0 | t._crypto_auth_keybytes();
            r.length !== o && f(_, 'invalid key length'), (c = d(r)), _.push(c);
            var h = new u(0 | t._crypto_auth_bytes()),
                p = h.address;
            if ((_.push(p), 0 == (0 | t._crypto_auth(p, s, n, 0, c)))) {
                var i = y(h, a);
                return g(_), i;
            }
            b(_, 'invalid usage');
        }

        function R(e, r, a) {
            var _ = [];
            l(a);
            var s = d((e = E(_, e, 'message'))),
                n = e.length;
            _.push(s), (r = E(_, r, 'key'));
            var c,
                o = 0 | t._crypto_auth_hmacsha256_keybytes();
            r.length !== o && f(_, 'invalid key length'), (c = d(r)), _.push(c);
            var h = new u(0 | t._crypto_auth_hmacsha256_bytes()),
                p = h.address;
            if (
                (_.push(p), 0 == (0 | t._crypto_auth_hmacsha256(p, s, n, 0, c)))
            ) {
                var i = y(h, a);
                return g(_), i;
            }
            b(_, 'invalid usage');
        }

        function P(e, r) {
            var a = [];
            l(r), m(a, e, 'state_address');
            var _ = new u(0 | t._crypto_auth_hmacsha256_bytes()),
                s = _.address;
            if ((a.push(s), 0 == (0 | t._crypto_auth_hmacsha256_final(e, s)))) {
                var n = (t._free(e), y(_, r));
                return g(a), n;
            }
            b(a, 'invalid usage');
        }

        function G(e, r) {
            var a = [];
            l(r);
            var _ = null,
                s = 0;
            null != e &&
                ((_ = d((e = E(a, e, 'key')))), (s = e.length), a.push(_));
            var n = new u(208).address;
            if (0 == (0 | t._crypto_auth_hmacsha256_init(n, _, s))) {
                var c = n;
                return g(a), c;
            }
            b(a, 'invalid usage');
        }

        function X(e) {
            var r = [];
            l(e);
            var a = new u(0 | t._crypto_auth_hmacsha256_keybytes()),
                _ = a.address;
            r.push(_), t._crypto_auth_hmacsha256_keygen(_);
            var s = y(a, e);
            return g(r), s;
        }

        function D(e, r, a) {
            var _ = [];
            l(a), m(_, e, 'state_address');
            var s = d((r = E(_, r, 'message_chunk'))),
                n = r.length;
            _.push(s),
                0 != (0 | t._crypto_auth_hmacsha256_update(e, s, n)) &&
                    b(_, 'invalid usage'),
                g(_);
        }

        function F(e, r, a) {
            var _ = [];
            e = E(_, e, 'tag');
            var s,
                n = 0 | t._crypto_auth_hmacsha256_bytes();
            e.length !== n && f(_, 'invalid tag length'), (s = d(e)), _.push(s);
            var c = d((r = E(_, r, 'message'))),
                o = r.length;
            _.push(c), (a = E(_, a, 'key'));
            var h,
                p = 0 | t._crypto_auth_hmacsha256_keybytes();
            a.length !== p && f(_, 'invalid key length'), (h = d(a)), _.push(h);
            var y = 0 == (0 | t._crypto_auth_hmacsha256_verify(s, c, o, 0, h));
            return g(_), y;
        }

        function V(e, r, a) {
            var _ = [];
            l(a);
            var s = d((e = E(_, e, 'message'))),
                n = e.length;
            _.push(s), (r = E(_, r, 'key'));
            var c,
                o = 0 | t._crypto_auth_hmacsha512_keybytes();
            r.length !== o && f(_, 'invalid key length'), (c = d(r)), _.push(c);
            var h = new u(0 | t._crypto_auth_hmacsha512_bytes()),
                p = h.address;
            if (
                (_.push(p), 0 == (0 | t._crypto_auth_hmacsha512(p, s, n, 0, c)))
            ) {
                var i = y(h, a);
                return g(_), i;
            }
            b(_, 'invalid usage');
        }

        function H(e, r) {
            var a = [];
            l(r), m(a, e, 'state_address');
            var _ = new u(0 | t._crypto_auth_hmacsha512_bytes()),
                s = _.address;
            if ((a.push(s), 0 == (0 | t._crypto_auth_hmacsha512_final(e, s)))) {
                var n = (t._free(e), y(_, r));
                return g(a), n;
            }
            b(a, 'invalid usage');
        }

        function q(e, r) {
            var a = [];
            l(r);
            var _ = null,
                s = 0;
            null != e &&
                ((_ = d((e = E(a, e, 'key')))), (s = e.length), a.push(_));
            var n = new u(416).address;
            if (0 == (0 | t._crypto_auth_hmacsha512_init(n, _, s))) {
                var c = n;
                return g(a), c;
            }
            b(a, 'invalid usage');
        }

        function j(e) {
            var r = [];
            l(e);
            var a = new u(0 | t._crypto_auth_hmacsha512_keybytes()),
                _ = a.address;
            r.push(_), t._crypto_auth_hmacsha512_keygen(_);
            var s = y(a, e);
            return g(r), s;
        }

        function z(e, r, a) {
            var _ = [];
            l(a), m(_, e, 'state_address');
            var s = d((r = E(_, r, 'message_chunk'))),
                n = r.length;
            _.push(s),
                0 != (0 | t._crypto_auth_hmacsha512_update(e, s, n)) &&
                    b(_, 'invalid usage'),
                g(_);
        }

        function W(e, r, a) {
            var _ = [];
            e = E(_, e, 'tag');
            var s,
                n = 0 | t._crypto_auth_hmacsha512_bytes();
            e.length !== n && f(_, 'invalid tag length'), (s = d(e)), _.push(s);
            var c = d((r = E(_, r, 'message'))),
                o = r.length;
            _.push(c), (a = E(_, a, 'key'));
            var h,
                p = 0 | t._crypto_auth_hmacsha512_keybytes();
            a.length !== p && f(_, 'invalid key length'), (h = d(a)), _.push(h);
            var y = 0 == (0 | t._crypto_auth_hmacsha512_verify(s, c, o, 0, h));
            return g(_), y;
        }

        function J(e) {
            var r = [];
            l(e);
            var a = new u(0 | t._crypto_auth_keybytes()),
                _ = a.address;
            r.push(_), t._crypto_auth_keygen(_);
            var s = y(a, e);
            return g(r), s;
        }

        function Q(e, r, a) {
            var _ = [];
            e = E(_, e, 'tag');
            var s,
                n = 0 | t._crypto_auth_bytes();
            e.length !== n && f(_, 'invalid tag length'), (s = d(e)), _.push(s);
            var c = d((r = E(_, r, 'message'))),
                o = r.length;
            _.push(c), (a = E(_, a, 'key'));
            var h,
                p = 0 | t._crypto_auth_keybytes();
            a.length !== p && f(_, 'invalid key length'), (h = d(a)), _.push(h);
            var y = 0 == (0 | t._crypto_auth_verify(s, c, o, 0, h));
            return g(_), y;
        }

        function Z(e, r, a) {
            var _ = [];
            l(a), (e = E(_, e, 'publicKey'));
            var s,
                n = 0 | t._crypto_box_publickeybytes();
            e.length !== n && f(_, 'invalid publicKey length'),
                (s = d(e)),
                _.push(s),
                (r = E(_, r, 'privateKey'));
            var c,
                o = 0 | t._crypto_box_secretkeybytes();
            r.length !== o && f(_, 'invalid privateKey length'),
                (c = d(r)),
                _.push(c);
            var h = new u(0 | t._crypto_box_beforenmbytes()),
                p = h.address;
            if ((_.push(p), 0 == (0 | t._crypto_box_beforenm(p, s, c)))) {
                var i = y(h, a);
                return g(_), i;
            }
            b(_, 'invalid usage');
        }

        function $(e) {
            var r = [];
            l(e);
            var a = new u(
                    0 |
                        t._crypto_box_curve25519xchacha20poly1305_publickeybytes(),
                ),
                _ = a.address;
            r.push(_);
            var s = new u(
                    0 |
                        t._crypto_box_curve25519xchacha20poly1305_secretkeybytes(),
                ),
                n = s.address;
            r.push(n), t._crypto_box_curve25519xchacha20poly1305_keypair(_, n);
            var c = y(
                {
                    publicKey: a,
                    privateKey: s,
                    keyType: 'curve25519',
                },
                e,
            );
            return g(r), c;
        }

        function ee(e, r, a) {
            var _ = [];
            l(a);
            var s = d((e = E(_, e, 'message'))),
                n = e.length;
            _.push(s), (r = E(_, r, 'publicKey'));
            var c,
                o =
                    0 |
                    t._crypto_box_curve25519xchacha20poly1305_publickeybytes();
            r.length !== o && f(_, 'invalid publicKey length'),
                (c = d(r)),
                _.push(c);
            var h = new u(
                    (n +
                        t._crypto_box_curve25519xchacha20poly1305_sealbytes()) |
                        0,
                ),
                p = h.address;
            _.push(p),
                t._crypto_box_curve25519xchacha20poly1305_seal(p, s, n, 0, c);
            var i = y(h, a);
            return g(_), i;
        }

        function re(e, r, a, _) {
            var s = [];
            l(_), (e = E(s, e, 'ciphertext'));
            var n,
                c = t._crypto_box_curve25519xchacha20poly1305_sealbytes(),
                o = e.length;
            o < c && f(s, 'ciphertext is too short'),
                (n = d(e)),
                s.push(n),
                (r = E(s, r, 'publicKey'));
            var h,
                p =
                    0 |
                    t._crypto_box_curve25519xchacha20poly1305_publickeybytes();
            r.length !== p && f(s, 'invalid publicKey length'),
                (h = d(r)),
                s.push(h),
                (a = E(s, a, 'secretKey'));
            var i,
                v =
                    0 |
                    t._crypto_box_curve25519xchacha20poly1305_secretkeybytes();
            a.length !== v && f(s, 'invalid secretKey length'),
                (i = d(a)),
                s.push(i);
            var b = new u(
                    (o -
                        t._crypto_box_curve25519xchacha20poly1305_sealbytes()) |
                        0,
                ),
                m = b.address;
            s.push(m),
                t._crypto_box_curve25519xchacha20poly1305_seal_open(
                    m,
                    n,
                    o,
                    0,
                    h,
                    i,
                );
            var x = y(b, _);
            return g(s), x;
        }

        function te(e, r, a, _, s) {
            var n = [];
            l(s);
            var c = d((e = E(n, e, 'message'))),
                o = e.length;
            n.push(c), (r = E(n, r, 'nonce'));
            var h,
                p = 0 | t._crypto_box_noncebytes();
            r.length !== p && f(n, 'invalid nonce length'),
                (h = d(r)),
                n.push(h),
                (a = E(n, a, 'publicKey'));
            var i,
                v = 0 | t._crypto_box_publickeybytes();
            a.length !== v && f(n, 'invalid publicKey length'),
                (i = d(a)),
                n.push(i),
                (_ = E(n, _, 'privateKey'));
            var m,
                x = 0 | t._crypto_box_secretkeybytes();
            _.length !== x && f(n, 'invalid privateKey length'),
                (m = d(_)),
                n.push(m);
            var k = new u(0 | o),
                S = k.address;
            n.push(S);
            var T = new u(0 | t._crypto_box_macbytes()),
                w = T.address;
            if (
                (n.push(w),
                0 == (0 | t._crypto_box_detached(S, w, c, o, 0, h, i, m)))
            ) {
                var Y = y(
                    {
                        ciphertext: k,
                        mac: T,
                    },
                    s,
                );
                return g(n), Y;
            }
            b(n, 'invalid usage');
        }

        function ae(e, r, a, _, s) {
            var n = [];
            l(s);
            var c = d((e = E(n, e, 'message'))),
                o = e.length;
            n.push(c), (r = E(n, r, 'nonce'));
            var h,
                p = 0 | t._crypto_box_noncebytes();
            r.length !== p && f(n, 'invalid nonce length'),
                (h = d(r)),
                n.push(h),
                (a = E(n, a, 'publicKey'));
            var i,
                v = 0 | t._crypto_box_publickeybytes();
            a.length !== v && f(n, 'invalid publicKey length'),
                (i = d(a)),
                n.push(i),
                (_ = E(n, _, 'privateKey'));
            var m,
                x = 0 | t._crypto_box_secretkeybytes();
            _.length !== x && f(n, 'invalid privateKey length'),
                (m = d(_)),
                n.push(m);
            var k = new u((o + t._crypto_box_macbytes()) | 0),
                S = k.address;
            if (
                (n.push(S), 0 == (0 | t._crypto_box_easy(S, c, o, 0, h, i, m)))
            ) {
                var T = y(k, s);
                return g(n), T;
            }
            b(n, 'invalid usage');
        }

        function _e(e, r, a, _) {
            var s = [];
            l(_);
            var n = d((e = E(s, e, 'message'))),
                c = e.length;
            s.push(n), (r = E(s, r, 'nonce'));
            var o,
                h = 0 | t._crypto_box_noncebytes();
            r.length !== h && f(s, 'invalid nonce length'),
                (o = d(r)),
                s.push(o),
                (a = E(s, a, 'sharedKey'));
            var p,
                i = 0 | t._crypto_box_beforenmbytes();
            a.length !== i && f(s, 'invalid sharedKey length'),
                (p = d(a)),
                s.push(p);
            var v = new u((c + t._crypto_box_macbytes()) | 0),
                m = v.address;
            if (
                (s.push(m),
                0 == (0 | t._crypto_box_easy_afternm(m, n, c, 0, o, p)))
            ) {
                var x = y(v, _);
                return g(s), x;
            }
            b(s, 'invalid usage');
        }

        function se(e) {
            var r = [];
            l(e);
            var a = new u(0 | t._crypto_box_publickeybytes()),
                _ = a.address;
            r.push(_);
            var s = new u(0 | t._crypto_box_secretkeybytes()),
                n = s.address;
            if ((r.push(n), 0 == (0 | t._crypto_box_keypair(_, n)))) {
                var c = {
                    publicKey: y(a, e),
                    privateKey: y(s, e),
                    keyType: 'x25519',
                };
                return g(r), c;
            }
            b(r, 'internal error');
        }

        function ne(e, r, a, _, s, n) {
            var c = [];
            l(n);
            var o = d((e = E(c, e, 'ciphertext'))),
                h = e.length;
            c.push(o), (r = E(c, r, 'mac'));
            var p,
                i = 0 | t._crypto_box_macbytes();
            r.length !== i && f(c, 'invalid mac length'),
                (p = d(r)),
                c.push(p),
                (a = E(c, a, 'nonce'));
            var v,
                m = 0 | t._crypto_box_noncebytes();
            a.length !== m && f(c, 'invalid nonce length'),
                (v = d(a)),
                c.push(v),
                (_ = E(c, _, 'publicKey'));
            var x,
                k = 0 | t._crypto_box_publickeybytes();
            _.length !== k && f(c, 'invalid publicKey length'),
                (x = d(_)),
                c.push(x),
                (s = E(c, s, 'privateKey'));
            var S,
                T = 0 | t._crypto_box_secretkeybytes();
            s.length !== T && f(c, 'invalid privateKey length'),
                (S = d(s)),
                c.push(S);
            var w = new u(0 | h),
                Y = w.address;
            if (
                (c.push(Y),
                0 == (0 | t._crypto_box_open_detached(Y, o, p, h, 0, v, x, S)))
            ) {
                var B = y(w, n);
                return g(c), B;
            }
            b(c, 'incorrect key pair for the given ciphertext');
        }

        function ce(e, r, a, _, s) {
            var n = [];
            l(s), (e = E(n, e, 'ciphertext'));
            var c,
                o = t._crypto_box_macbytes(),
                h = e.length;
            h < o && f(n, 'ciphertext is too short'),
                (c = d(e)),
                n.push(c),
                (r = E(n, r, 'nonce'));
            var p,
                i = 0 | t._crypto_box_noncebytes();
            r.length !== i && f(n, 'invalid nonce length'),
                (p = d(r)),
                n.push(p),
                (a = E(n, a, 'publicKey'));
            var v,
                m = 0 | t._crypto_box_publickeybytes();
            a.length !== m && f(n, 'invalid publicKey length'),
                (v = d(a)),
                n.push(v),
                (_ = E(n, _, 'privateKey'));
            var x,
                k = 0 | t._crypto_box_secretkeybytes();
            _.length !== k && f(n, 'invalid privateKey length'),
                (x = d(_)),
                n.push(x);
            var S = new u((h - t._crypto_box_macbytes()) | 0),
                T = S.address;
            if (
                (n.push(T),
                0 == (0 | t._crypto_box_open_easy(T, c, h, 0, p, v, x)))
            ) {
                var w = y(S, s);
                return g(n), w;
            }
            b(n, 'incorrect key pair for the given ciphertext');
        }

        function oe(e, r, a, _) {
            var s = [];
            l(_);
            var n = d((e = E(s, e, 'ciphertext'))),
                c = e.length;
            s.push(n), (r = E(s, r, 'nonce'));
            var o,
                h = 0 | t._crypto_box_noncebytes();
            r.length !== h && f(s, 'invalid nonce length'),
                (o = d(r)),
                s.push(o),
                (a = E(s, a, 'sharedKey'));
            var p,
                i = 0 | t._crypto_box_beforenmbytes();
            a.length !== i && f(s, 'invalid sharedKey length'),
                (p = d(a)),
                s.push(p);
            var v = new u((c - t._crypto_box_macbytes()) | 0),
                m = v.address;
            if (
                (s.push(m),
                0 == (0 | t._crypto_box_open_easy_afternm(m, n, c, 0, o, p)))
            ) {
                var x = y(v, _);
                return g(s), x;
            }
            b(s, 'incorrect secret key for the given ciphertext');
        }

        function he(e, r, a) {
            var _ = [];
            l(a);
            var s = d((e = E(_, e, 'message'))),
                n = e.length;
            _.push(s), (r = E(_, r, 'publicKey'));
            var c,
                o = 0 | t._crypto_box_publickeybytes();
            r.length !== o && f(_, 'invalid publicKey length'),
                (c = d(r)),
                _.push(c);
            var h = new u((n + t._crypto_box_sealbytes()) | 0),
                p = h.address;
            if ((_.push(p), 0 == (0 | t._crypto_box_seal(p, s, n, 0, c)))) {
                var i = y(h, a);
                return g(_), i;
            }
            b(_, 'invalid usage');
        }

        function pe(e, r, a, _) {
            var s = [];
            l(_), (e = E(s, e, 'ciphertext'));
            var n,
                c = t._crypto_box_sealbytes(),
                o = e.length;
            o < c && f(s, 'ciphertext is too short'),
                (n = d(e)),
                s.push(n),
                (r = E(s, r, 'publicKey'));
            var h,
                p = 0 | t._crypto_box_publickeybytes();
            r.length !== p && f(s, 'invalid publicKey length'),
                (h = d(r)),
                s.push(h),
                (a = E(s, a, 'privateKey'));
            var i,
                v = 0 | t._crypto_box_secretkeybytes();
            a.length !== v && f(s, 'invalid privateKey length'),
                (i = d(a)),
                s.push(i);
            var m = new u((o - t._crypto_box_sealbytes()) | 0),
                x = m.address;
            if (
                (s.push(x),
                0 == (0 | t._crypto_box_seal_open(x, n, o, 0, h, i)))
            ) {
                var k = y(m, _);
                return g(s), k;
            }
            b(s, 'incorrect key pair for the given ciphertext');
        }

        function ye(e, r) {
            var a = [];
            l(r), (e = E(a, e, 'seed'));
            var _,
                s = 0 | t._crypto_box_seedbytes();
            e.length !== s && f(a, 'invalid seed length'),
                (_ = d(e)),
                a.push(_);
            var n = new u(0 | t._crypto_box_publickeybytes()),
                c = n.address;
            a.push(c);
            var o = new u(0 | t._crypto_box_secretkeybytes()),
                h = o.address;
            if ((a.push(h), 0 == (0 | t._crypto_box_seed_keypair(c, h, _)))) {
                var p = {
                    publicKey: y(n, r),
                    privateKey: y(o, r),
                    keyType: 'x25519',
                };
                return g(a), p;
            }
            b(a, 'invalid usage');
        }

        function ie(e, r, a) {
            var _ = [];
            l(a), (e = E(_, e, 'p'));
            var s,
                n = 0 | t._crypto_core_ed25519_bytes();
            e.length !== n && f(_, 'invalid p length'),
                (s = d(e)),
                _.push(s),
                (r = E(_, r, 'q'));
            var c,
                o = 0 | t._crypto_core_ed25519_bytes();
            r.length !== o && f(_, 'invalid q length'), (c = d(r)), _.push(c);
            var h = new u(0 | t._crypto_core_ed25519_bytes()),
                p = h.address;
            if ((_.push(p), 0 == (0 | t._crypto_core_ed25519_add(p, s, c)))) {
                var i = y(h, a);
                return g(_), i;
            }
            b(_, 'input is an invalid element');
        }

        function le(e, r) {
            var a = [];
            l(r);
            var _ = d((e = E(a, e, 'r')));
            e.length, a.push(_);
            var s = new u(0 | t._crypto_core_ed25519_bytes()),
                n = s.address;
            if (
                (a.push(n), 0 == (0 | t._crypto_core_ed25519_from_hash(n, _)))
            ) {
                var c = y(s, r);
                return g(a), c;
            }
            b(a, 'invalid usage');
        }

        function ue(e, r) {
            var a = [];
            l(r);
            var _ = d((e = E(a, e, 'r')));
            e.length, a.push(_);
            var s = new u(0 | t._crypto_core_ed25519_bytes()),
                n = s.address;
            if (
                (a.push(n),
                0 == (0 | t._crypto_core_ed25519_from_uniform(n, _)))
            ) {
                var c = y(s, r);
                return g(a), c;
            }
            b(a, 'invalid usage');
        }

        function de(e, r) {
            var a = [];
            l(r), (e = E(a, e, 'repr'));
            var _,
                s = 0 | t._crypto_core_ed25519_bytes();
            e.length !== s && f(a, 'invalid repr length'),
                (_ = d(e)),
                a.push(_);
            var n = 1 == (0 | t._crypto_core_ed25519_is_valid_point(_));
            return g(a), n;
        }

        function ve(e) {
            var r = [];
            l(e);
            var a = new u(0 | t._crypto_core_ed25519_bytes()),
                _ = a.address;
            r.push(_), t._crypto_core_ed25519_random(_);
            var s = y(a, e);
            return g(r), s;
        }

        function ge(e, r, a) {
            var _ = [];
            l(a), (e = E(_, e, 'x'));
            var s,
                n = 0 | t._crypto_core_ed25519_scalarbytes();
            e.length !== n && f(_, 'invalid x length'),
                (s = d(e)),
                _.push(s),
                (r = E(_, r, 'y'));
            var c,
                o = 0 | t._crypto_core_ed25519_scalarbytes();
            r.length !== o && f(_, 'invalid y length'), (c = d(r)), _.push(c);
            var h = new u(0 | t._crypto_core_ed25519_scalarbytes()),
                p = h.address;
            _.push(p), t._crypto_core_ed25519_scalar_add(p, s, c);
            var i = y(h, a);
            return g(_), i;
        }

        function be(e, r) {
            var a = [];
            l(r), (e = E(a, e, 's'));
            var _,
                s = 0 | t._crypto_core_ed25519_scalarbytes();
            e.length !== s && f(a, 'invalid s length'), (_ = d(e)), a.push(_);
            var n = new u(0 | t._crypto_core_ed25519_scalarbytes()),
                c = n.address;
            a.push(c), t._crypto_core_ed25519_scalar_complement(c, _);
            var o = y(n, r);
            return g(a), o;
        }

        function fe(e, r) {
            var a = [];
            l(r), (e = E(a, e, 's'));
            var _,
                s = 0 | t._crypto_core_ed25519_scalarbytes();
            e.length !== s && f(a, 'invalid s length'), (_ = d(e)), a.push(_);
            var n = new u(0 | t._crypto_core_ed25519_scalarbytes()),
                c = n.address;
            if (
                (a.push(c),
                0 == (0 | t._crypto_core_ed25519_scalar_invert(c, _)))
            ) {
                var o = y(n, r);
                return g(a), o;
            }
            b(a, 'invalid reciprocate');
        }

        function me(e, r, a) {
            var _ = [];
            l(a), (e = E(_, e, 'x'));
            var s,
                n = 0 | t._crypto_core_ed25519_scalarbytes();
            e.length !== n && f(_, 'invalid x length'),
                (s = d(e)),
                _.push(s),
                (r = E(_, r, 'y'));
            var c,
                o = 0 | t._crypto_core_ed25519_scalarbytes();
            r.length !== o && f(_, 'invalid y length'), (c = d(r)), _.push(c);
            var h = new u(0 | t._crypto_core_ed25519_scalarbytes()),
                p = h.address;
            _.push(p), t._crypto_core_ed25519_scalar_mul(p, s, c);
            var i = y(h, a);
            return g(_), i;
        }

        function Ee(e, r) {
            var a = [];
            l(r), (e = E(a, e, 's'));
            var _,
                s = 0 | t._crypto_core_ed25519_scalarbytes();
            e.length !== s && f(a, 'invalid s length'), (_ = d(e)), a.push(_);
            var n = new u(0 | t._crypto_core_ed25519_scalarbytes()),
                c = n.address;
            a.push(c), t._crypto_core_ed25519_scalar_negate(c, _);
            var o = y(n, r);
            return g(a), o;
        }

        function xe(e) {
            var r = [];
            l(e);
            var a = new u(0 | t._crypto_core_ed25519_scalarbytes()),
                _ = a.address;
            r.push(_), t._crypto_core_ed25519_scalar_random(_);
            var s = y(a, e);
            return g(r), s;
        }

        function ke(e, r) {
            var a = [];
            l(r), (e = E(a, e, 'sample'));
            var _,
                s = 0 | t._crypto_core_ed25519_nonreducedscalarbytes();
            e.length !== s && f(a, 'invalid sample length'),
                (_ = d(e)),
                a.push(_);
            var n = new u(0 | t._crypto_core_ed25519_scalarbytes()),
                c = n.address;
            a.push(c), t._crypto_core_ed25519_scalar_reduce(c, _);
            var o = y(n, r);
            return g(a), o;
        }

        function Se(e, r, a) {
            var _ = [];
            l(a), (e = E(_, e, 'x'));
            var s,
                n = 0 | t._crypto_core_ed25519_scalarbytes();
            e.length !== n && f(_, 'invalid x length'),
                (s = d(e)),
                _.push(s),
                (r = E(_, r, 'y'));
            var c,
                o = 0 | t._crypto_core_ed25519_scalarbytes();
            r.length !== o && f(_, 'invalid y length'), (c = d(r)), _.push(c);
            var h = new u(0 | t._crypto_core_ed25519_scalarbytes()),
                p = h.address;
            _.push(p), t._crypto_core_ed25519_scalar_sub(p, s, c);
            var i = y(h, a);
            return g(_), i;
        }

        function Te(e, r, a) {
            var _ = [];
            l(a), (e = E(_, e, 'p'));
            var s,
                n = 0 | t._crypto_core_ed25519_bytes();
            e.length !== n && f(_, 'invalid p length'),
                (s = d(e)),
                _.push(s),
                (r = E(_, r, 'q'));
            var c,
                o = 0 | t._crypto_core_ed25519_bytes();
            r.length !== o && f(_, 'invalid q length'), (c = d(r)), _.push(c);
            var h = new u(0 | t._crypto_core_ed25519_bytes()),
                p = h.address;
            if ((_.push(p), 0 == (0 | t._crypto_core_ed25519_sub(p, s, c)))) {
                var i = y(h, a);
                return g(_), i;
            }
            b(_, 'input is an invalid element');
        }

        function we(e, r, a, _) {
            var s = [];
            l(_), (e = E(s, e, 'input'));
            var n,
                c = 0 | t._crypto_core_hchacha20_inputbytes();
            e.length !== c && f(s, 'invalid input length'),
                (n = d(e)),
                s.push(n),
                (r = E(s, r, 'privateKey'));
            var o,
                h = 0 | t._crypto_core_hchacha20_keybytes();
            r.length !== h && f(s, 'invalid privateKey length'),
                (o = d(r)),
                s.push(o);
            var p = null;
            null != a &&
                ((p = d((a = E(s, a, 'constant')))), a.length, s.push(p));
            var i = new u(0 | t._crypto_core_hchacha20_outputbytes()),
                v = i.address;
            if ((s.push(v), 0 == (0 | t._crypto_core_hchacha20(v, n, o, p)))) {
                var m = y(i, _);
                return g(s), m;
            }
            b(s, 'invalid usage');
        }

        function Ye(e, r, a, _) {
            var s = [];
            l(_), (e = E(s, e, 'input'));
            var n,
                c = 0 | t._crypto_core_hsalsa20_inputbytes();
            e.length !== c && f(s, 'invalid input length'),
                (n = d(e)),
                s.push(n),
                (r = E(s, r, 'privateKey'));
            var o,
                h = 0 | t._crypto_core_hsalsa20_keybytes();
            r.length !== h && f(s, 'invalid privateKey length'),
                (o = d(r)),
                s.push(o);
            var p = null;
            null != a &&
                ((p = d((a = E(s, a, 'constant')))), a.length, s.push(p));
            var i = new u(0 | t._crypto_core_hsalsa20_outputbytes()),
                v = i.address;
            if ((s.push(v), 0 == (0 | t._crypto_core_hsalsa20(v, n, o, p)))) {
                var m = y(i, _);
                return g(s), m;
            }
            b(s, 'invalid usage');
        }

        function Be(e, r, a) {
            var _ = [];
            l(a), (e = E(_, e, 'p'));
            var s,
                n = 0 | t._crypto_core_ristretto255_bytes();
            e.length !== n && f(_, 'invalid p length'),
                (s = d(e)),
                _.push(s),
                (r = E(_, r, 'q'));
            var c,
                o = 0 | t._crypto_core_ristretto255_bytes();
            r.length !== o && f(_, 'invalid q length'), (c = d(r)), _.push(c);
            var h = new u(0 | t._crypto_core_ristretto255_bytes()),
                p = h.address;
            if (
                (_.push(p), 0 == (0 | t._crypto_core_ristretto255_add(p, s, c)))
            ) {
                var i = y(h, a);
                return g(_), i;
            }
            b(_, 'input is an invalid element');
        }

        function Ae(e, r) {
            var a = [];
            l(r);
            var _ = d((e = E(a, e, 'r')));
            e.length, a.push(_);
            var s = new u(0 | t._crypto_core_ristretto255_bytes()),
                n = s.address;
            if (
                (a.push(n),
                0 == (0 | t._crypto_core_ristretto255_from_hash(n, _)))
            ) {
                var c = y(s, r);
                return g(a), c;
            }
            b(a, 'invalid usage');
        }

        function Ke(e, r) {
            var a = [];
            l(r), (e = E(a, e, 'repr'));
            var _,
                s = 0 | t._crypto_core_ristretto255_bytes();
            e.length !== s && f(a, 'invalid repr length'),
                (_ = d(e)),
                a.push(_);
            var n = 1 == (0 | t._crypto_core_ristretto255_is_valid_point(_));
            return g(a), n;
        }

        function Me(e) {
            var r = [];
            l(e);
            var a = new u(0 | t._crypto_core_ristretto255_bytes()),
                _ = a.address;
            r.push(_), t._crypto_core_ristretto255_random(_);
            var s = y(a, e);
            return g(r), s;
        }

        function Ie(e, r, a) {
            var _ = [];
            l(a), (e = E(_, e, 'x'));
            var s,
                n = 0 | t._crypto_core_ristretto255_scalarbytes();
            e.length !== n && f(_, 'invalid x length'),
                (s = d(e)),
                _.push(s),
                (r = E(_, r, 'y'));
            var c,
                o = 0 | t._crypto_core_ristretto255_scalarbytes();
            r.length !== o && f(_, 'invalid y length'), (c = d(r)), _.push(c);
            var h = new u(0 | t._crypto_core_ristretto255_scalarbytes()),
                p = h.address;
            _.push(p), t._crypto_core_ristretto255_scalar_add(p, s, c);
            var i = y(h, a);
            return g(_), i;
        }

        function Ne(e, r) {
            var a = [];
            l(r), (e = E(a, e, 's'));
            var _,
                s = 0 | t._crypto_core_ristretto255_scalarbytes();
            e.length !== s && f(a, 'invalid s length'), (_ = d(e)), a.push(_);
            var n = new u(0 | t._crypto_core_ristretto255_scalarbytes()),
                c = n.address;
            a.push(c), t._crypto_core_ristretto255_scalar_complement(c, _);
            var o = y(n, r);
            return g(a), o;
        }

        function Le(e, r) {
            var a = [];
            l(r), (e = E(a, e, 's'));
            var _,
                s = 0 | t._crypto_core_ristretto255_scalarbytes();
            e.length !== s && f(a, 'invalid s length'), (_ = d(e)), a.push(_);
            var n = new u(0 | t._crypto_core_ristretto255_scalarbytes()),
                c = n.address;
            if (
                (a.push(c),
                0 == (0 | t._crypto_core_ristretto255_scalar_invert(c, _)))
            ) {
                var o = y(n, r);
                return g(a), o;
            }
            b(a, 'invalid reciprocate');
        }

        function Ue(e, r, a) {
            var _ = [];
            l(a), (e = E(_, e, 'x'));
            var s,
                n = 0 | t._crypto_core_ristretto255_scalarbytes();
            e.length !== n && f(_, 'invalid x length'),
                (s = d(e)),
                _.push(s),
                (r = E(_, r, 'y'));
            var c,
                o = 0 | t._crypto_core_ristretto255_scalarbytes();
            r.length !== o && f(_, 'invalid y length'), (c = d(r)), _.push(c);
            var h = new u(0 | t._crypto_core_ristretto255_scalarbytes()),
                p = h.address;
            _.push(p), t._crypto_core_ristretto255_scalar_mul(p, s, c);
            var i = y(h, a);
            return g(_), i;
        }

        function Oe(e, r) {
            var a = [];
            l(r), (e = E(a, e, 's'));
            var _,
                s = 0 | t._crypto_core_ristretto255_scalarbytes();
            e.length !== s && f(a, 'invalid s length'), (_ = d(e)), a.push(_);
            var n = new u(0 | t._crypto_core_ristretto255_scalarbytes()),
                c = n.address;
            a.push(c), t._crypto_core_ristretto255_scalar_negate(c, _);
            var o = y(n, r);
            return g(a), o;
        }

        function Ce(e) {
            var r = [];
            l(e);
            var a = new u(0 | t._crypto_core_ristretto255_scalarbytes()),
                _ = a.address;
            r.push(_), t._crypto_core_ristretto255_scalar_random(_);
            var s = y(a, e);
            return g(r), s;
        }

        function Re(e, r) {
            var a = [];
            l(r), (e = E(a, e, 'sample'));
            var _,
                s = 0 | t._crypto_core_ristretto255_nonreducedscalarbytes();
            e.length !== s && f(a, 'invalid sample length'),
                (_ = d(e)),
                a.push(_);
            var n = new u(0 | t._crypto_core_ristretto255_scalarbytes()),
                c = n.address;
            a.push(c), t._crypto_core_ristretto255_scalar_reduce(c, _);
            var o = y(n, r);
            return g(a), o;
        }

        function Pe(e, r, a) {
            var _ = [];
            l(a), (e = E(_, e, 'x'));
            var s,
                n = 0 | t._crypto_core_ristretto255_scalarbytes();
            e.length !== n && f(_, 'invalid x length'),
                (s = d(e)),
                _.push(s),
                (r = E(_, r, 'y'));
            var c,
                o = 0 | t._crypto_core_ristretto255_scalarbytes();
            r.length !== o && f(_, 'invalid y length'), (c = d(r)), _.push(c);
            var h = new u(0 | t._crypto_core_ristretto255_scalarbytes()),
                p = h.address;
            _.push(p), t._crypto_core_ristretto255_scalar_sub(p, s, c);
            var i = y(h, a);
            return g(_), i;
        }

        function Ge(e, r, a) {
            var _ = [];
            l(a), (e = E(_, e, 'p'));
            var s,
                n = 0 | t._crypto_core_ristretto255_bytes();
            e.length !== n && f(_, 'invalid p length'),
                (s = d(e)),
                _.push(s),
                (r = E(_, r, 'q'));
            var c,
                o = 0 | t._crypto_core_ristretto255_bytes();
            r.length !== o && f(_, 'invalid q length'), (c = d(r)), _.push(c);
            var h = new u(0 | t._crypto_core_ristretto255_bytes()),
                p = h.address;
            if (
                (_.push(p), 0 == (0 | t._crypto_core_ristretto255_sub(p, s, c)))
            ) {
                var i = y(h, a);
                return g(_), i;
            }
            b(_, 'input is an invalid element');
        }

        function Xe(e, r, a, _) {
            var s = [];
            l(_),
                m(s, e, 'hash_length'),
                ('number' != typeof e || (0 | e) !== e || e < 0) &&
                    f(s, 'hash_length must be an unsigned integer');
            var n = d((r = E(s, r, 'message'))),
                c = r.length;
            s.push(n);
            var o = null,
                h = 0;
            null != a &&
                ((o = d((a = E(s, a, 'key')))), (h = a.length), s.push(o));
            var p = new u((e |= 0)),
                i = p.address;
            if (
                (s.push(i),
                0 == (0 | t._crypto_generichash(i, e, n, c, 0, o, h)))
            ) {
                var v = y(p, _);
                return g(s), v;
            }
            b(s, 'invalid usage');
        }

        function De(e, r, a, _, s) {
            var n = [];
            l(s),
                m(n, e, 'subkey_len'),
                ('number' != typeof e || (0 | e) !== e || e < 0) &&
                    f(n, 'subkey_len must be an unsigned integer');
            var c = null,
                o = 0;
            null != r &&
                ((c = d((r = E(n, r, 'key')))), (o = r.length), n.push(c));
            var h = null,
                p = 0;
            null != a &&
                ((a = E(n, a, 'id')),
                (p = 0 | t._crypto_generichash_blake2b_saltbytes()),
                a.length !== p && f(n, 'invalid id length'),
                (h = d(a)),
                n.push(h));
            var i = null,
                v = 0;
            null != _ &&
                ((_ = E(n, _, 'ctx')),
                (v = 0 | t._crypto_generichash_blake2b_personalbytes()),
                _.length !== v && f(n, 'invalid ctx length'),
                (i = d(_)),
                n.push(i));
            var x = new u(0 | e),
                k = x.address;
            if (
                (n.push(k),
                0 ==
                    (0 |
                        t._crypto_generichash_blake2b_salt_personal(
                            k,
                            e,
                            null,
                            0,
                            0,
                            c,
                            o,
                            h,
                            i,
                        )))
            ) {
                var S = y(x, s);
                return g(n), S;
            }
            b(n, 'invalid usage');
        }

        function Fe(e, r, a) {
            var _ = [];
            l(a),
                m(_, e, 'state_address'),
                m(_, r, 'hash_length'),
                ('number' != typeof r || (0 | r) !== r || r < 0) &&
                    f(_, 'hash_length must be an unsigned integer');
            var s = new u((r |= 0)),
                n = s.address;
            if ((_.push(n), 0 == (0 | t._crypto_generichash_final(e, n, r)))) {
                var c = (t._free(e), y(s, a));
                return g(_), c;
            }
            b(_, 'invalid usage');
        }

        function Ve(e, r, a) {
            var _ = [];
            l(a);
            var s = null,
                n = 0;
            null != e &&
                ((s = d((e = E(_, e, 'key')))), (n = e.length), _.push(s)),
                m(_, r, 'hash_length'),
                ('number' != typeof r || (0 | r) !== r || r < 0) &&
                    f(_, 'hash_length must be an unsigned integer');
            var c = new u(357).address;
            if (0 == (0 | t._crypto_generichash_init(c, s, n, r))) {
                var o = c;
                return g(_), o;
            }
            b(_, 'invalid usage');
        }

        function He(e) {
            var r = [];
            l(e);
            var a = new u(0 | t._crypto_generichash_keybytes()),
                _ = a.address;
            r.push(_), t._crypto_generichash_keygen(_);
            var s = y(a, e);
            return g(r), s;
        }

        function qe(e, r, a) {
            var _ = [];
            l(a), m(_, e, 'state_address');
            var s = d((r = E(_, r, 'message_chunk'))),
                n = r.length;
            _.push(s),
                0 != (0 | t._crypto_generichash_update(e, s, n)) &&
                    b(_, 'invalid usage'),
                g(_);
        }

        function je(e, r) {
            var a = [];
            l(r);
            var _ = d((e = E(a, e, 'message'))),
                s = e.length;
            a.push(_);
            var n = new u(0 | t._crypto_hash_bytes()),
                c = n.address;
            if ((a.push(c), 0 == (0 | t._crypto_hash(c, _, s, 0)))) {
                var o = y(n, r);
                return g(a), o;
            }
            b(a, 'invalid usage');
        }

        function ze(e, r) {
            var a = [];
            l(r);
            var _ = d((e = E(a, e, 'message'))),
                s = e.length;
            a.push(_);
            var n = new u(0 | t._crypto_hash_sha256_bytes()),
                c = n.address;
            if ((a.push(c), 0 == (0 | t._crypto_hash_sha256(c, _, s, 0)))) {
                var o = y(n, r);
                return g(a), o;
            }
            b(a, 'invalid usage');
        }

        function We(e, r) {
            var a = [];
            l(r), m(a, e, 'state_address');
            var _ = new u(0 | t._crypto_hash_sha256_bytes()),
                s = _.address;
            if ((a.push(s), 0 == (0 | t._crypto_hash_sha256_final(e, s)))) {
                var n = (t._free(e), y(_, r));
                return g(a), n;
            }
            b(a, 'invalid usage');
        }

        function Je(e) {
            var r = [];
            l(e);
            var a = new u(104).address;
            if (0 == (0 | t._crypto_hash_sha256_init(a))) {
                var _ = a;
                return g(r), _;
            }
            b(r, 'invalid usage');
        }

        function Qe(e, r, a) {
            var _ = [];
            l(a), m(_, e, 'state_address');
            var s = d((r = E(_, r, 'message_chunk'))),
                n = r.length;
            _.push(s),
                0 != (0 | t._crypto_hash_sha256_update(e, s, n)) &&
                    b(_, 'invalid usage'),
                g(_);
        }

        function Ze(e, r) {
            var a = [];
            l(r);
            var _ = d((e = E(a, e, 'message'))),
                s = e.length;
            a.push(_);
            var n = new u(0 | t._crypto_hash_sha512_bytes()),
                c = n.address;
            if ((a.push(c), 0 == (0 | t._crypto_hash_sha512(c, _, s, 0)))) {
                var o = y(n, r);
                return g(a), o;
            }
            b(a, 'invalid usage');
        }

        function $e(e, r) {
            var a = [];
            l(r), m(a, e, 'state_address');
            var _ = new u(0 | t._crypto_hash_sha512_bytes()),
                s = _.address;
            if ((a.push(s), 0 == (0 | t._crypto_hash_sha512_final(e, s)))) {
                var n = (t._free(e), y(_, r));
                return g(a), n;
            }
            b(a, 'invalid usage');
        }

        function er(e) {
            var r = [];
            l(e);
            var a = new u(208).address;
            if (0 == (0 | t._crypto_hash_sha512_init(a))) {
                var _ = a;
                return g(r), _;
            }
            b(r, 'invalid usage');
        }

        function rr(e, r, a) {
            var _ = [];
            l(a), m(_, e, 'state_address');
            var s = d((r = E(_, r, 'message_chunk'))),
                n = r.length;
            _.push(s),
                0 != (0 | t._crypto_hash_sha512_update(e, s, n)) &&
                    b(_, 'invalid usage'),
                g(_);
        }

        function tr(e, r, a, _, n) {
            var c = [];
            l(n),
                m(c, e, 'subkey_len'),
                ('number' != typeof e || (0 | e) !== e || e < 0) &&
                    f(c, 'subkey_len must be an unsigned integer'),
                m(c, r, 'subkey_id'),
                ('number' != typeof r || (0 | r) !== r || r < 0) &&
                    f(c, 'subkey_id must be an unsigned integer'),
                'string' != typeof a && f(c, 'ctx must be a string'),
                (a = s(a + '\0')),
                null != h && a.length - 1 !== h && f(c, 'invalid ctx length');
            var o = d(a),
                h = a.length - 1;
            c.push(o), (_ = E(c, _, 'key'));
            var p,
                i = 0 | t._crypto_kdf_keybytes();
            _.length !== i && f(c, 'invalid key length'), (p = d(_)), c.push(p);
            var v = new u(0 | e),
                b = v.address;
            c.push(b),
                t._crypto_kdf_derive_from_key(b, e, r, (r >>> 24) >>> 8, o, p);
            var x = y(v, n);
            return g(c), x;
        }

        function ar(e) {
            var r = [];
            l(e);
            var a = new u(0 | t._crypto_kdf_keybytes()),
                _ = a.address;
            r.push(_), t._crypto_kdf_keygen(_);
            var s = y(a, e);
            return g(r), s;
        }

        function _r(e, r, a, _) {
            var s = [];
            l(_), (e = E(s, e, 'clientPublicKey'));
            var n,
                c = 0 | t._crypto_kx_publickeybytes();
            e.length !== c && f(s, 'invalid clientPublicKey length'),
                (n = d(e)),
                s.push(n),
                (r = E(s, r, 'clientSecretKey'));
            var o,
                h = 0 | t._crypto_kx_secretkeybytes();
            r.length !== h && f(s, 'invalid clientSecretKey length'),
                (o = d(r)),
                s.push(o),
                (a = E(s, a, 'serverPublicKey'));
            var p,
                i = 0 | t._crypto_kx_publickeybytes();
            a.length !== i && f(s, 'invalid serverPublicKey length'),
                (p = d(a)),
                s.push(p);
            var v = new u(0 | t._crypto_kx_sessionkeybytes()),
                m = v.address;
            s.push(m);
            var x = new u(0 | t._crypto_kx_sessionkeybytes()),
                k = x.address;
            if (
                (s.push(k),
                0 == (0 | t._crypto_kx_client_session_keys(m, k, n, o, p)))
            ) {
                var S = y(
                    {
                        sharedRx: v,
                        sharedTx: x,
                    },
                    _,
                );
                return g(s), S;
            }
            b(s, 'invalid usage');
        }

        function sr(e) {
            var r = [];
            l(e);
            var a = new u(0 | t._crypto_kx_publickeybytes()),
                _ = a.address;
            r.push(_);
            var s = new u(0 | t._crypto_kx_secretkeybytes()),
                n = s.address;
            if ((r.push(n), 0 == (0 | t._crypto_kx_keypair(_, n)))) {
                var c = {
                    publicKey: y(a, e),
                    privateKey: y(s, e),
                    keyType: 'x25519',
                };
                return g(r), c;
            }
            b(r, 'internal error');
        }

        function nr(e, r) {
            var a = [];
            l(r), (e = E(a, e, 'seed'));
            var _,
                s = 0 | t._crypto_kx_seedbytes();
            e.length !== s && f(a, 'invalid seed length'),
                (_ = d(e)),
                a.push(_);
            var n = new u(0 | t._crypto_kx_publickeybytes()),
                c = n.address;
            a.push(c);
            var o = new u(0 | t._crypto_kx_secretkeybytes()),
                h = o.address;
            if ((a.push(h), 0 == (0 | t._crypto_kx_seed_keypair(c, h, _)))) {
                var p = {
                    publicKey: y(n, r),
                    privateKey: y(o, r),
                    keyType: 'x25519',
                };
                return g(a), p;
            }
            b(a, 'internal error');
        }

        function cr(e, r, a, _) {
            var s = [];
            l(_), (e = E(s, e, 'serverPublicKey'));
            var n,
                c = 0 | t._crypto_kx_publickeybytes();
            e.length !== c && f(s, 'invalid serverPublicKey length'),
                (n = d(e)),
                s.push(n),
                (r = E(s, r, 'serverSecretKey'));
            var o,
                h = 0 | t._crypto_kx_secretkeybytes();
            r.length !== h && f(s, 'invalid serverSecretKey length'),
                (o = d(r)),
                s.push(o),
                (a = E(s, a, 'clientPublicKey'));
            var p,
                i = 0 | t._crypto_kx_publickeybytes();
            a.length !== i && f(s, 'invalid clientPublicKey length'),
                (p = d(a)),
                s.push(p);
            var v = new u(0 | t._crypto_kx_sessionkeybytes()),
                m = v.address;
            s.push(m);
            var x = new u(0 | t._crypto_kx_sessionkeybytes()),
                k = x.address;
            if (
                (s.push(k),
                0 == (0 | t._crypto_kx_server_session_keys(m, k, n, o, p)))
            ) {
                var S = y(
                    {
                        sharedRx: v,
                        sharedTx: x,
                    },
                    _,
                );
                return g(s), S;
            }
            b(s, 'invalid usage');
        }

        function or(e, r, a) {
            var _ = [];
            l(a);
            var s = d((e = E(_, e, 'message'))),
                n = e.length;
            _.push(s), (r = E(_, r, 'key'));
            var c,
                o = 0 | t._crypto_onetimeauth_keybytes();
            r.length !== o && f(_, 'invalid key length'), (c = d(r)), _.push(c);
            var h = new u(0 | t._crypto_onetimeauth_bytes()),
                p = h.address;
            if ((_.push(p), 0 == (0 | t._crypto_onetimeauth(p, s, n, 0, c)))) {
                var i = y(h, a);
                return g(_), i;
            }
            b(_, 'invalid usage');
        }

        function hr(e, r) {
            var a = [];
            l(r), m(a, e, 'state_address');
            var _ = new u(0 | t._crypto_onetimeauth_bytes()),
                s = _.address;
            if ((a.push(s), 0 == (0 | t._crypto_onetimeauth_final(e, s)))) {
                var n = (t._free(e), y(_, r));
                return g(a), n;
            }
            b(a, 'invalid usage');
        }

        function pr(e, r) {
            var a = [];
            l(r);
            var _ = null;
            null != e && ((_ = d((e = E(a, e, 'key')))), e.length, a.push(_));
            var s = new u(144).address;
            if (0 == (0 | t._crypto_onetimeauth_init(s, _))) {
                var n = s;
                return g(a), n;
            }
            b(a, 'invalid usage');
        }

        function yr(e) {
            var r = [];
            l(e);
            var a = new u(0 | t._crypto_onetimeauth_keybytes()),
                _ = a.address;
            r.push(_), t._crypto_onetimeauth_keygen(_);
            var s = y(a, e);
            return g(r), s;
        }

        function ir(e, r, a) {
            var _ = [];
            l(a), m(_, e, 'state_address');
            var s = d((r = E(_, r, 'message_chunk'))),
                n = r.length;
            _.push(s),
                0 != (0 | t._crypto_onetimeauth_update(e, s, n)) &&
                    b(_, 'invalid usage'),
                g(_);
        }

        function lr(e, r, a) {
            var _ = [];
            e = E(_, e, 'hash');
            var s,
                n = 0 | t._crypto_onetimeauth_bytes();
            e.length !== n && f(_, 'invalid hash length'),
                (s = d(e)),
                _.push(s);
            var c = d((r = E(_, r, 'message'))),
                o = r.length;
            _.push(c), (a = E(_, a, 'key'));
            var h,
                p = 0 | t._crypto_onetimeauth_keybytes();
            a.length !== p && f(_, 'invalid key length'), (h = d(a)), _.push(h);
            var y = 0 == (0 | t._crypto_onetimeauth_verify(s, c, o, 0, h));
            return g(_), y;
        }

        function ur(e, r, a, _, s, n, c) {
            var o = [];
            l(c),
                m(o, e, 'keyLength'),
                ('number' != typeof e || (0 | e) !== e || e < 0) &&
                    f(o, 'keyLength must be an unsigned integer');
            var h = d((r = E(o, r, 'password'))),
                p = r.length;
            o.push(h), (a = E(o, a, 'salt'));
            var i,
                v = 0 | t._crypto_pwhash_saltbytes();
            a.length !== v && f(o, 'invalid salt length'),
                (i = d(a)),
                o.push(i),
                m(o, _, 'opsLimit'),
                ('number' != typeof _ || (0 | _) !== _ || _ < 0) &&
                    f(o, 'opsLimit must be an unsigned integer'),
                m(o, s, 'memLimit'),
                ('number' != typeof s || (0 | s) !== s || s < 0) &&
                    f(o, 'memLimit must be an unsigned integer'),
                m(o, n, 'algorithm'),
                ('number' != typeof n || (0 | n) !== n || n < 0) &&
                    f(o, 'algorithm must be an unsigned integer');
            var x = new u(0 | e),
                k = x.address;
            if (
                (o.push(k),
                0 == (0 | t._crypto_pwhash(k, e, 0, h, p, 0, i, _, 0, s, n)))
            ) {
                var S = y(x, c);
                return g(o), S;
            }
            b(o, 'invalid usage');
        }

        function dr(e, r, a, _, s, n) {
            var c = [];
            l(n),
                m(c, e, 'keyLength'),
                ('number' != typeof e || (0 | e) !== e || e < 0) &&
                    f(c, 'keyLength must be an unsigned integer');
            var o = d((r = E(c, r, 'password'))),
                h = r.length;
            c.push(o), (a = E(c, a, 'salt'));
            var p,
                i = 0 | t._crypto_pwhash_scryptsalsa208sha256_saltbytes();
            a.length !== i && f(c, 'invalid salt length'),
                (p = d(a)),
                c.push(p),
                m(c, _, 'opsLimit'),
                ('number' != typeof _ || (0 | _) !== _ || _ < 0) &&
                    f(c, 'opsLimit must be an unsigned integer'),
                m(c, s, 'memLimit'),
                ('number' != typeof s || (0 | s) !== s || s < 0) &&
                    f(c, 'memLimit must be an unsigned integer');
            var v = new u(0 | e),
                x = v.address;
            if (
                (c.push(x),
                0 ==
                    (0 |
                        t._crypto_pwhash_scryptsalsa208sha256(
                            x,
                            e,
                            0,
                            o,
                            h,
                            0,
                            p,
                            _,
                            0,
                            s,
                        )))
            ) {
                var k = y(v, n);
                return g(c), k;
            }
            b(c, 'invalid usage');
        }

        function vr(e, r, a, _, s, n, c) {
            var o = [];
            l(c);
            var h = d((e = E(o, e, 'password'))),
                p = e.length;
            o.push(h);
            var i = d((r = E(o, r, 'salt'))),
                v = r.length;
            o.push(i),
                m(o, a, 'opsLimit'),
                ('number' != typeof a || (0 | a) !== a || a < 0) &&
                    f(o, 'opsLimit must be an unsigned integer'),
                m(o, _, 'r'),
                ('number' != typeof _ || (0 | _) !== _ || _ < 0) &&
                    f(o, 'r must be an unsigned integer'),
                m(o, s, 'p'),
                ('number' != typeof s || (0 | s) !== s || s < 0) &&
                    f(o, 'p must be an unsigned integer'),
                m(o, n, 'keyLength'),
                ('number' != typeof n || (0 | n) !== n || n < 0) &&
                    f(o, 'keyLength must be an unsigned integer');
            var x = new u(0 | n),
                k = x.address;
            if (
                (o.push(k),
                0 ==
                    (0 |
                        t._crypto_pwhash_scryptsalsa208sha256_ll(
                            h,
                            p,
                            i,
                            v,
                            a,
                            0,
                            _,
                            s,
                            k,
                            n,
                        )))
            ) {
                var S = y(x, c);
                return g(o), S;
            }
            b(o, 'invalid usage');
        }

        function gr(e, r, a, _) {
            var s = [];
            l(_);
            var n = d((e = E(s, e, 'password'))),
                c = e.length;
            s.push(n),
                m(s, r, 'opsLimit'),
                ('number' != typeof r || (0 | r) !== r || r < 0) &&
                    f(s, 'opsLimit must be an unsigned integer'),
                m(s, a, 'memLimit'),
                ('number' != typeof a || (0 | a) !== a || a < 0) &&
                    f(s, 'memLimit must be an unsigned integer');
            var o = new u(0 | t._crypto_pwhash_scryptsalsa208sha256_strbytes())
                .address;
            if (
                (s.push(o),
                0 ==
                    (0 |
                        t._crypto_pwhash_scryptsalsa208sha256_str(
                            o,
                            n,
                            c,
                            0,
                            r,
                            0,
                            a,
                        )))
            ) {
                var h = t.UTF8ToString(o);
                return g(s), h;
            }
            b(s, 'invalid usage');
        }

        function br(e, r, a) {
            var _ = [];
            l(a),
                'string' != typeof e &&
                    f(_, 'hashed_password must be a string'),
                (e = s(e + '\0')),
                null != c &&
                    e.length - 1 !== c &&
                    f(_, 'invalid hashed_password length');
            var n = d(e),
                c = e.length - 1;
            _.push(n);
            var o = d((r = E(_, r, 'password'))),
                h = r.length;
            _.push(o);
            var p =
                0 ==
                (0 |
                    t._crypto_pwhash_scryptsalsa208sha256_str_verify(
                        n,
                        o,
                        h,
                        0,
                    ));
            return g(_), p;
        }

        function fr(e, r, a, _) {
            var s = [];
            l(_);
            var n = d((e = E(s, e, 'password'))),
                c = e.length;
            s.push(n),
                m(s, r, 'opsLimit'),
                ('number' != typeof r || (0 | r) !== r || r < 0) &&
                    f(s, 'opsLimit must be an unsigned integer'),
                m(s, a, 'memLimit'),
                ('number' != typeof a || (0 | a) !== a || a < 0) &&
                    f(s, 'memLimit must be an unsigned integer');
            var o = new u(0 | t._crypto_pwhash_strbytes()).address;
            if (
                (s.push(o),
                0 == (0 | t._crypto_pwhash_str(o, n, c, 0, r, 0, a)))
            ) {
                var h = t.UTF8ToString(o);
                return g(s), h;
            }
            b(s, 'invalid usage');
        }

        function mr(e, r, a, _) {
            var n = [];
            l(_),
                'string' != typeof e &&
                    f(n, 'hashed_password must be a string'),
                (e = s(e + '\0')),
                null != o &&
                    e.length - 1 !== o &&
                    f(n, 'invalid hashed_password length');
            var c = d(e),
                o = e.length - 1;
            n.push(c),
                m(n, r, 'opsLimit'),
                ('number' != typeof r || (0 | r) !== r || r < 0) &&
                    f(n, 'opsLimit must be an unsigned integer'),
                m(n, a, 'memLimit'),
                ('number' != typeof a || (0 | a) !== a || a < 0) &&
                    f(n, 'memLimit must be an unsigned integer');
            var h = 0 != (0 | t._crypto_pwhash_str_needs_rehash(c, r, 0, a));
            return g(n), h;
        }

        function Er(e, r, a) {
            var _ = [];
            l(a),
                'string' != typeof e &&
                    f(_, 'hashed_password must be a string'),
                (e = s(e + '\0')),
                null != c &&
                    e.length - 1 !== c &&
                    f(_, 'invalid hashed_password length');
            var n = d(e),
                c = e.length - 1;
            _.push(n);
            var o = d((r = E(_, r, 'password'))),
                h = r.length;
            _.push(o);
            var p = 0 == (0 | t._crypto_pwhash_str_verify(n, o, h, 0));
            return g(_), p;
        }

        function xr(e, r, a) {
            var _ = [];
            l(a), (e = E(_, e, 'privateKey'));
            var s,
                n = 0 | t._crypto_scalarmult_scalarbytes();
            e.length !== n && f(_, 'invalid privateKey length'),
                (s = d(e)),
                _.push(s),
                (r = E(_, r, 'publicKey'));
            var c,
                o = 0 | t._crypto_scalarmult_bytes();
            r.length !== o && f(_, 'invalid publicKey length'),
                (c = d(r)),
                _.push(c);
            var h = new u(0 | t._crypto_scalarmult_bytes()),
                p = h.address;
            if ((_.push(p), 0 == (0 | t._crypto_scalarmult(p, s, c)))) {
                var i = y(h, a);
                return g(_), i;
            }
            b(_, 'weak public key');
        }

        function kr(e, r) {
            var a = [];
            l(r), (e = E(a, e, 'privateKey'));
            var _,
                s = 0 | t._crypto_scalarmult_scalarbytes();
            e.length !== s && f(a, 'invalid privateKey length'),
                (_ = d(e)),
                a.push(_);
            var n = new u(0 | t._crypto_scalarmult_bytes()),
                c = n.address;
            if ((a.push(c), 0 == (0 | t._crypto_scalarmult_base(c, _)))) {
                var o = y(n, r);
                return g(a), o;
            }
            b(a, 'unknown error');
        }

        function Sr(e, r, a) {
            var _ = [];
            l(a), (e = E(_, e, 'n'));
            var s,
                n = 0 | t._crypto_scalarmult_ed25519_scalarbytes();
            e.length !== n && f(_, 'invalid n length'),
                (s = d(e)),
                _.push(s),
                (r = E(_, r, 'p'));
            var c,
                o = 0 | t._crypto_scalarmult_ed25519_bytes();
            r.length !== o && f(_, 'invalid p length'), (c = d(r)), _.push(c);
            var h = new u(0 | t._crypto_scalarmult_ed25519_bytes()),
                p = h.address;
            if ((_.push(p), 0 == (0 | t._crypto_scalarmult_ed25519(p, s, c)))) {
                var i = y(h, a);
                return g(_), i;
            }
            b(_, 'invalid point or scalar is 0');
        }

        function Tr(e, r) {
            var a = [];
            l(r), (e = E(a, e, 'scalar'));
            var _,
                s = 0 | t._crypto_scalarmult_ed25519_scalarbytes();
            e.length !== s && f(a, 'invalid scalar length'),
                (_ = d(e)),
                a.push(_);
            var n = new u(0 | t._crypto_scalarmult_ed25519_bytes()),
                c = n.address;
            if (
                (a.push(c), 0 == (0 | t._crypto_scalarmult_ed25519_base(c, _)))
            ) {
                var o = y(n, r);
                return g(a), o;
            }
            b(a, 'scalar is 0');
        }

        function wr(e, r) {
            var a = [];
            l(r), (e = E(a, e, 'scalar'));
            var _,
                s = 0 | t._crypto_scalarmult_ed25519_scalarbytes();
            e.length !== s && f(a, 'invalid scalar length'),
                (_ = d(e)),
                a.push(_);
            var n = new u(0 | t._crypto_scalarmult_ed25519_bytes()),
                c = n.address;
            if (
                (a.push(c),
                0 == (0 | t._crypto_scalarmult_ed25519_base_noclamp(c, _)))
            ) {
                var o = y(n, r);
                return g(a), o;
            }
            b(a, 'scalar is 0');
        }

        function Yr(e, r, a) {
            var _ = [];
            l(a), (e = E(_, e, 'n'));
            var s,
                n = 0 | t._crypto_scalarmult_ed25519_scalarbytes();
            e.length !== n && f(_, 'invalid n length'),
                (s = d(e)),
                _.push(s),
                (r = E(_, r, 'p'));
            var c,
                o = 0 | t._crypto_scalarmult_ed25519_bytes();
            r.length !== o && f(_, 'invalid p length'), (c = d(r)), _.push(c);
            var h = new u(0 | t._crypto_scalarmult_ed25519_bytes()),
                p = h.address;
            if (
                (_.push(p),
                0 == (0 | t._crypto_scalarmult_ed25519_noclamp(p, s, c)))
            ) {
                var i = y(h, a);
                return g(_), i;
            }
            b(_, 'invalid point or scalar is 0');
        }

        function Br(e, r, a) {
            var _ = [];
            l(a), (e = E(_, e, 'scalar'));
            var s,
                n = 0 | t._crypto_scalarmult_ristretto255_scalarbytes();
            e.length !== n && f(_, 'invalid scalar length'),
                (s = d(e)),
                _.push(s),
                (r = E(_, r, 'element'));
            var c,
                o = 0 | t._crypto_scalarmult_ristretto255_bytes();
            r.length !== o && f(_, 'invalid element length'),
                (c = d(r)),
                _.push(c);
            var h = new u(0 | t._crypto_scalarmult_ristretto255_bytes()),
                p = h.address;
            if (
                (_.push(p),
                0 == (0 | t._crypto_scalarmult_ristretto255(p, s, c)))
            ) {
                var i = y(h, a);
                return g(_), i;
            }
            b(_, 'result is identity element');
        }

        function Ar(e, r) {
            var a = [];
            l(r), (e = E(a, e, 'scalar'));
            var _,
                s = 0 | t._crypto_core_ristretto255_scalarbytes();
            e.length !== s && f(a, 'invalid scalar length'),
                (_ = d(e)),
                a.push(_);
            var n = new u(0 | t._crypto_core_ristretto255_bytes()),
                c = n.address;
            if (
                (a.push(c),
                0 == (0 | t._crypto_scalarmult_ristretto255_base(c, _)))
            ) {
                var o = y(n, r);
                return g(a), o;
            }
            b(a, 'scalar is 0');
        }

        function Kr(e, r, a, _) {
            var s = [];
            l(_);
            var n = d((e = E(s, e, 'message'))),
                c = e.length;
            s.push(n), (r = E(s, r, 'nonce'));
            var o,
                h = 0 | t._crypto_secretbox_noncebytes();
            r.length !== h && f(s, 'invalid nonce length'),
                (o = d(r)),
                s.push(o),
                (a = E(s, a, 'key'));
            var p,
                i = 0 | t._crypto_secretbox_keybytes();
            a.length !== i && f(s, 'invalid key length'), (p = d(a)), s.push(p);
            var v = new u(0 | c),
                m = v.address;
            s.push(m);
            var x = new u(0 | t._crypto_secretbox_macbytes()),
                k = x.address;
            if (
                (s.push(k),
                0 == (0 | t._crypto_secretbox_detached(m, k, n, c, 0, o, p)))
            ) {
                var S = y(
                    {
                        mac: x,
                        cipher: v,
                    },
                    _,
                );
                return g(s), S;
            }
            b(s, 'invalid usage');
        }

        function Mr(e, r, a, _) {
            var s = [];
            l(_);
            var n = d((e = E(s, e, 'message'))),
                c = e.length;
            s.push(n), (r = E(s, r, 'nonce'));
            var o,
                h = 0 | t._crypto_secretbox_noncebytes();
            r.length !== h && f(s, 'invalid nonce length'),
                (o = d(r)),
                s.push(o),
                (a = E(s, a, 'key'));
            var p,
                i = 0 | t._crypto_secretbox_keybytes();
            a.length !== i && f(s, 'invalid key length'), (p = d(a)), s.push(p);
            var v = new u((c + t._crypto_secretbox_macbytes()) | 0),
                m = v.address;
            if (
                (s.push(m),
                0 == (0 | t._crypto_secretbox_easy(m, n, c, 0, o, p)))
            ) {
                var x = y(v, _);
                return g(s), x;
            }
            b(s, 'invalid usage');
        }

        function Ir(e) {
            var r = [];
            l(e);
            var a = new u(0 | t._crypto_secretbox_keybytes()),
                _ = a.address;
            r.push(_), t._crypto_secretbox_keygen(_);
            var s = y(a, e);
            return g(r), s;
        }

        function Nr(e, r, a, _, s) {
            var n = [];
            l(s);
            var c = d((e = E(n, e, 'ciphertext'))),
                o = e.length;
            n.push(c), (r = E(n, r, 'mac'));
            var h,
                p = 0 | t._crypto_secretbox_macbytes();
            r.length !== p && f(n, 'invalid mac length'),
                (h = d(r)),
                n.push(h),
                (a = E(n, a, 'nonce'));
            var i,
                v = 0 | t._crypto_secretbox_noncebytes();
            a.length !== v && f(n, 'invalid nonce length'),
                (i = d(a)),
                n.push(i),
                (_ = E(n, _, 'key'));
            var m,
                x = 0 | t._crypto_secretbox_keybytes();
            _.length !== x && f(n, 'invalid key length'), (m = d(_)), n.push(m);
            var k = new u(0 | o),
                S = k.address;
            if (
                (n.push(S),
                0 ==
                    (0 |
                        t._crypto_secretbox_open_detached(S, c, h, o, 0, i, m)))
            ) {
                var T = y(k, s);
                return g(n), T;
            }
            b(n, 'wrong secret key for the given ciphertext');
        }

        function Lr(e, r, a, _) {
            var s = [];
            l(_), (e = E(s, e, 'ciphertext'));
            var n,
                c = t._crypto_secretbox_macbytes(),
                o = e.length;
            o < c && f(s, 'ciphertext is too short'),
                (n = d(e)),
                s.push(n),
                (r = E(s, r, 'nonce'));
            var h,
                p = 0 | t._crypto_secretbox_noncebytes();
            r.length !== p && f(s, 'invalid nonce length'),
                (h = d(r)),
                s.push(h),
                (a = E(s, a, 'key'));
            var i,
                v = 0 | t._crypto_secretbox_keybytes();
            a.length !== v && f(s, 'invalid key length'), (i = d(a)), s.push(i);
            var m = new u((o - t._crypto_secretbox_macbytes()) | 0),
                x = m.address;
            if (
                (s.push(x),
                0 == (0 | t._crypto_secretbox_open_easy(x, n, o, 0, h, i)))
            ) {
                var k = y(m, _);
                return g(s), k;
            }
            b(s, 'wrong secret key for the given ciphertext');
        }

        function Ur(e, r, a) {
            var _ = [];
            l(a), (e = E(_, e, 'header'));
            var s,
                n = 0 | t._crypto_secretstream_xchacha20poly1305_headerbytes();
            e.length !== n && f(_, 'invalid header length'),
                (s = d(e)),
                _.push(s),
                (r = E(_, r, 'key'));
            var c,
                o = 0 | t._crypto_secretstream_xchacha20poly1305_keybytes();
            r.length !== o && f(_, 'invalid key length'), (c = d(r)), _.push(c);
            var h = new u(52).address;
            if (
                0 ==
                (0 |
                    t._crypto_secretstream_xchacha20poly1305_init_pull(h, s, c))
            ) {
                var p = h;
                return g(_), p;
            }
            b(_, 'invalid usage');
        }

        function Or(e, r) {
            var a = [];
            l(r), (e = E(a, e, 'key'));
            var _,
                s = 0 | t._crypto_secretstream_xchacha20poly1305_keybytes();
            e.length !== s && f(a, 'invalid key length'), (_ = d(e)), a.push(_);
            var n = new u(52).address,
                c = new u(
                    0 | t._crypto_secretstream_xchacha20poly1305_headerbytes(),
                ),
                o = c.address;
            if (
                (a.push(o),
                0 ==
                    (0 |
                        t._crypto_secretstream_xchacha20poly1305_init_push(
                            n,
                            o,
                            _,
                        )))
            ) {
                var h = {
                    state: n,
                    header: y(c, r),
                };
                return g(a), h;
            }
            b(a, 'invalid usage');
        }

        function Cr(e) {
            var r = [];
            l(e);
            var a = new u(
                    0 | t._crypto_secretstream_xchacha20poly1305_keybytes(),
                ),
                _ = a.address;
            r.push(_), t._crypto_secretstream_xchacha20poly1305_keygen(_);
            var s = y(a, e);
            return g(r), s;
        }

        function Rr(e, r, a, _) {
            var s = [];
            l(_), m(s, e, 'state_address'), (r = E(s, r, 'cipher'));
            var n,
                c = t._crypto_secretstream_xchacha20poly1305_abytes(),
                o = r.length;
            o < c && f(s, 'cipher is too short'), (n = d(r)), s.push(n);
            var h = null,
                p = 0;
            null != a &&
                ((h = d((a = E(s, a, 'ad')))), (p = a.length), s.push(h));
            var i = new u(
                    (o - t._crypto_secretstream_xchacha20poly1305_abytes()) | 0,
                ),
                b = i.address;
            s.push(b);
            var x,
                k =
                    ((x = v(1)),
                    s.push(x),
                    (k = 0 ===
                        t._crypto_secretstream_xchacha20poly1305_pull(
                            e,
                            b,
                            0,
                            x,
                            n,
                            o,
                            0,
                            h,
                            p,
                        ) && {
                        tag: t.HEAPU8[x],
                        message: i,
                    }) && {
                        message: y(k.message, _),
                        tag: k.tag,
                    });
            return g(s), k;
        }

        function Pr(e, r, a, _, s) {
            var n = [];
            l(s), m(n, e, 'state_address');
            var c = d((r = E(n, r, 'message_chunk'))),
                o = r.length;
            n.push(c);
            var h = null,
                p = 0;
            null != a &&
                ((h = d((a = E(n, a, 'ad')))), (p = a.length), n.push(h)),
                m(n, _, 'tag'),
                ('number' != typeof _ || (0 | _) !== _ || _ < 0) &&
                    f(n, 'tag must be an unsigned integer');
            var i = new u(
                    (o + t._crypto_secretstream_xchacha20poly1305_abytes()) | 0,
                ),
                v = i.address;
            if (
                (n.push(v),
                0 ==
                    (0 |
                        t._crypto_secretstream_xchacha20poly1305_push(
                            e,
                            v,
                            0,
                            c,
                            o,
                            0,
                            h,
                            p,
                            0,
                            _,
                        )))
            ) {
                var x = y(i, s);
                return g(n), x;
            }
            b(n, 'invalid usage');
        }

        function Gr(e, r) {
            var a = [];
            return (
                l(r),
                m(a, e, 'state_address'),
                t._crypto_secretstream_xchacha20poly1305_rekey(e),
                g(a),
                !0
            );
        }

        function Xr(e, r, a) {
            var _ = [];
            l(a);
            var s = d((e = E(_, e, 'message'))),
                n = e.length;
            _.push(s), (r = E(_, r, 'key'));
            var c,
                o = 0 | t._crypto_shorthash_keybytes();
            r.length !== o && f(_, 'invalid key length'), (c = d(r)), _.push(c);
            var h = new u(0 | t._crypto_shorthash_bytes()),
                p = h.address;
            if ((_.push(p), 0 == (0 | t._crypto_shorthash(p, s, n, 0, c)))) {
                var i = y(h, a);
                return g(_), i;
            }
            b(_, 'invalid usage');
        }

        function Dr(e) {
            var r = [];
            l(e);
            var a = new u(0 | t._crypto_shorthash_keybytes()),
                _ = a.address;
            r.push(_), t._crypto_shorthash_keygen(_);
            var s = y(a, e);
            return g(r), s;
        }

        function Fr(e, r, a) {
            var _ = [];
            l(a);
            var s = d((e = E(_, e, 'message'))),
                n = e.length;
            _.push(s), (r = E(_, r, 'key'));
            var c,
                o = 0 | t._crypto_shorthash_siphashx24_keybytes();
            r.length !== o && f(_, 'invalid key length'), (c = d(r)), _.push(c);
            var h = new u(0 | t._crypto_shorthash_siphashx24_bytes()),
                p = h.address;
            if (
                (_.push(p),
                0 == (0 | t._crypto_shorthash_siphashx24(p, s, n, 0, c)))
            ) {
                var i = y(h, a);
                return g(_), i;
            }
            b(_, 'invalid usage');
        }

        function Vr(e, r, a) {
            var _ = [];
            l(a);
            var s = d((e = E(_, e, 'message'))),
                n = e.length;
            _.push(s), (r = E(_, r, 'privateKey'));
            var c,
                o = 0 | t._crypto_sign_secretkeybytes();
            r.length !== o && f(_, 'invalid privateKey length'),
                (c = d(r)),
                _.push(c);
            var h = new u((e.length + t._crypto_sign_bytes()) | 0),
                p = h.address;
            if ((_.push(p), 0 == (0 | t._crypto_sign(p, null, s, n, 0, c)))) {
                var i = y(h, a);
                return g(_), i;
            }
            b(_, 'invalid usage');
        }

        function Hr(e, r, a) {
            var _ = [];
            l(a);
            var s = d((e = E(_, e, 'message'))),
                n = e.length;
            _.push(s), (r = E(_, r, 'privateKey'));
            var c,
                o = 0 | t._crypto_sign_secretkeybytes();
            r.length !== o && f(_, 'invalid privateKey length'),
                (c = d(r)),
                _.push(c);
            var h = new u(0 | t._crypto_sign_bytes()),
                p = h.address;
            if (
                (_.push(p),
                0 == (0 | t._crypto_sign_detached(p, null, s, n, 0, c)))
            ) {
                var i = y(h, a);
                return g(_), i;
            }
            b(_, 'invalid usage');
        }

        function qr(e, r) {
            var a = [];
            l(r), (e = E(a, e, 'edPk'));
            var _,
                s = 0 | t._crypto_sign_publickeybytes();
            e.length !== s && f(a, 'invalid edPk length'),
                (_ = d(e)),
                a.push(_);
            var n = new u(0 | t._crypto_scalarmult_scalarbytes()),
                c = n.address;
            if (
                (a.push(c),
                0 == (0 | t._crypto_sign_ed25519_pk_to_curve25519(c, _)))
            ) {
                var o = y(n, r);
                return g(a), o;
            }
            b(a, 'invalid key');
        }

        function jr(e, r) {
            var a = [];
            l(r), (e = E(a, e, 'edSk'));
            var _,
                s = 0 | t._crypto_sign_secretkeybytes();
            e.length !== s && f(a, 'invalid edSk length'),
                (_ = d(e)),
                a.push(_);
            var n = new u(0 | t._crypto_scalarmult_scalarbytes()),
                c = n.address;
            if (
                (a.push(c),
                0 == (0 | t._crypto_sign_ed25519_sk_to_curve25519(c, _)))
            ) {
                var o = y(n, r);
                return g(a), o;
            }
            b(a, 'invalid key');
        }

        function zr(e, r) {
            var a = [];
            l(r), (e = E(a, e, 'privateKey'));
            var _,
                s = 0 | t._crypto_sign_secretkeybytes();
            e.length !== s && f(a, 'invalid privateKey length'),
                (_ = d(e)),
                a.push(_);
            var n = new u(0 | t._crypto_sign_publickeybytes()),
                c = n.address;
            if ((a.push(c), 0 == (0 | t._crypto_sign_ed25519_sk_to_pk(c, _)))) {
                var o = y(n, r);
                return g(a), o;
            }
            b(a, 'invalid key');
        }

        function Wr(e, r) {
            var a = [];
            l(r), (e = E(a, e, 'privateKey'));
            var _,
                s = 0 | t._crypto_sign_secretkeybytes();
            e.length !== s && f(a, 'invalid privateKey length'),
                (_ = d(e)),
                a.push(_);
            var n = new u(0 | t._crypto_sign_seedbytes()),
                c = n.address;
            if (
                (a.push(c), 0 == (0 | t._crypto_sign_ed25519_sk_to_seed(c, _)))
            ) {
                var o = y(n, r);
                return g(a), o;
            }
            b(a, 'invalid key');
        }

        function Jr(e, r, a) {
            var _ = [];
            l(a), m(_, e, 'state_address'), (r = E(_, r, 'privateKey'));
            var s,
                n = 0 | t._crypto_sign_secretkeybytes();
            r.length !== n && f(_, 'invalid privateKey length'),
                (s = d(r)),
                _.push(s);
            var c = new u(0 | t._crypto_sign_bytes()),
                o = c.address;
            if (
                (_.push(o),
                0 == (0 | t._crypto_sign_final_create(e, o, null, s)))
            ) {
                var h = (t._free(e), y(c, a));
                return g(_), h;
            }
            b(_, 'invalid usage');
        }

        function Qr(e, r, a, _) {
            var s = [];
            l(_), m(s, e, 'state_address'), (r = E(s, r, 'signature'));
            var n,
                c = 0 | t._crypto_sign_bytes();
            r.length !== c && f(s, 'invalid signature length'),
                (n = d(r)),
                s.push(n),
                (a = E(s, a, 'publicKey'));
            var o,
                h = 0 | t._crypto_sign_publickeybytes();
            a.length !== h && f(s, 'invalid publicKey length'),
                (o = d(a)),
                s.push(o);
            var p = 0 == (0 | t._crypto_sign_final_verify(e, n, o));
            return g(s), p;
        }

        function Zr(e) {
            var r = [];
            l(e);
            var a = new u(208).address;
            if (0 == (0 | t._crypto_sign_init(a))) {
                var _ = a;
                return g(r), _;
            }
            b(r, 'internal error');
        }

        function $r(e) {
            var r = [];
            l(e);
            var a = new u(0 | t._crypto_sign_publickeybytes()),
                _ = a.address;
            r.push(_);
            var s = new u(0 | t._crypto_sign_secretkeybytes()),
                n = s.address;
            if ((r.push(n), 0 == (0 | t._crypto_sign_keypair(_, n)))) {
                var c = {
                    publicKey: y(a, e),
                    privateKey: y(s, e),
                    keyType: 'ed25519',
                };
                return g(r), c;
            }
            b(r, 'internal error');
        }

        function et(e, r, a) {
            var _ = [];
            l(a), (e = E(_, e, 'signedMessage'));
            var s,
                n = t._crypto_sign_bytes(),
                c = e.length;
            c < n && f(_, 'signedMessage is too short'),
                (s = d(e)),
                _.push(s),
                (r = E(_, r, 'publicKey'));
            var o,
                h = 0 | t._crypto_sign_publickeybytes();
            r.length !== h && f(_, 'invalid publicKey length'),
                (o = d(r)),
                _.push(o);
            var p = new u((c - t._crypto_sign_bytes()) | 0),
                i = p.address;
            if (
                (_.push(i), 0 == (0 | t._crypto_sign_open(i, null, s, c, 0, o)))
            ) {
                var v = y(p, a);
                return g(_), v;
            }
            b(_, 'incorrect signature for the given public key');
        }

        function rt(e, r) {
            var a = [];
            l(r), (e = E(a, e, 'seed'));
            var _,
                s = 0 | t._crypto_sign_seedbytes();
            e.length !== s && f(a, 'invalid seed length'),
                (_ = d(e)),
                a.push(_);
            var n = new u(0 | t._crypto_sign_publickeybytes()),
                c = n.address;
            a.push(c);
            var o = new u(0 | t._crypto_sign_secretkeybytes()),
                h = o.address;
            if ((a.push(h), 0 == (0 | t._crypto_sign_seed_keypair(c, h, _)))) {
                var p = {
                    publicKey: y(n, r),
                    privateKey: y(o, r),
                    keyType: 'ed25519',
                };
                return g(a), p;
            }
            b(a, 'invalid usage');
        }

        function tt(e, r, a) {
            var _ = [];
            l(a), m(_, e, 'state_address');
            var s = d((r = E(_, r, 'message_chunk'))),
                n = r.length;
            _.push(s),
                0 != (0 | t._crypto_sign_update(e, s, n, 0)) &&
                    b(_, 'invalid usage'),
                g(_);
        }

        function at(e, r, a) {
            var _ = [];
            e = E(_, e, 'signature');
            var s,
                n = 0 | t._crypto_sign_bytes();
            e.length !== n && f(_, 'invalid signature length'),
                (s = d(e)),
                _.push(s);
            var c = d((r = E(_, r, 'message'))),
                o = r.length;
            _.push(c), (a = E(_, a, 'publicKey'));
            var h,
                p = 0 | t._crypto_sign_publickeybytes();
            a.length !== p && f(_, 'invalid publicKey length'),
                (h = d(a)),
                _.push(h);
            var y = 0 == (0 | t._crypto_sign_verify_detached(s, c, o, 0, h));
            return g(_), y;
        }

        function _t(e, r, a, _) {
            var s = [];
            l(_),
                m(s, e, 'outLength'),
                ('number' != typeof e || (0 | e) !== e || e < 0) &&
                    f(s, 'outLength must be an unsigned integer'),
                (r = E(s, r, 'key'));
            var n,
                c = 0 | t._crypto_stream_chacha20_keybytes();
            r.length !== c && f(s, 'invalid key length'),
                (n = d(r)),
                s.push(n),
                (a = E(s, a, 'nonce'));
            var o,
                h = 0 | t._crypto_stream_chacha20_noncebytes();
            a.length !== h && f(s, 'invalid nonce length'),
                (o = d(a)),
                s.push(o);
            var p = new u(0 | e),
                i = p.address;
            s.push(i), t._crypto_stream_chacha20(i, e, 0, o, n);
            var v = y(p, _);
            return g(s), v;
        }

        function st(e, r, a, _) {
            var s = [];
            l(_);
            var n = d((e = E(s, e, 'input_message'))),
                c = e.length;
            s.push(n), (r = E(s, r, 'nonce'));
            var o,
                h = 0 | t._crypto_stream_chacha20_ietf_noncebytes();
            r.length !== h && f(s, 'invalid nonce length'),
                (o = d(r)),
                s.push(o),
                (a = E(s, a, 'key'));
            var p,
                i = 0 | t._crypto_stream_chacha20_ietf_keybytes();
            a.length !== i && f(s, 'invalid key length'), (p = d(a)), s.push(p);
            var v = new u(0 | c),
                m = v.address;
            if (
                (s.push(m),
                0 === t._crypto_stream_chacha20_ietf_xor(m, n, c, 0, o, p))
            ) {
                var x = y(v, _);
                return g(s), x;
            }
            b(s, 'invalid usage');
        }

        function nt(e, r, a, _, s) {
            var n = [];
            l(s);
            var c = d((e = E(n, e, 'input_message'))),
                o = e.length;
            n.push(c), (r = E(n, r, 'nonce'));
            var h,
                p = 0 | t._crypto_stream_chacha20_ietf_noncebytes();
            r.length !== p && f(n, 'invalid nonce length'),
                (h = d(r)),
                n.push(h),
                m(n, a, 'nonce_increment'),
                ('number' != typeof a || (0 | a) !== a || a < 0) &&
                    f(n, 'nonce_increment must be an unsigned integer'),
                (_ = E(n, _, 'key'));
            var i,
                v = 0 | t._crypto_stream_chacha20_ietf_keybytes();
            _.length !== v && f(n, 'invalid key length'), (i = d(_)), n.push(i);
            var x = new u(0 | o),
                k = x.address;
            if (
                (n.push(k),
                0 ===
                    t._crypto_stream_chacha20_ietf_xor_ic(k, c, o, 0, h, a, i))
            ) {
                var S = y(x, s);
                return g(n), S;
            }
            b(n, 'invalid usage');
        }

        function ct(e) {
            var r = [];
            l(e);
            var a = new u(0 | t._crypto_stream_chacha20_keybytes()),
                _ = a.address;
            r.push(_), t._crypto_stream_chacha20_keygen(_);
            var s = y(a, e);
            return g(r), s;
        }

        function ot(e, r, a, _) {
            var s = [];
            l(_);
            var n = d((e = E(s, e, 'input_message'))),
                c = e.length;
            s.push(n), (r = E(s, r, 'nonce'));
            var o,
                h = 0 | t._crypto_stream_chacha20_noncebytes();
            r.length !== h && f(s, 'invalid nonce length'),
                (o = d(r)),
                s.push(o),
                (a = E(s, a, 'key'));
            var p,
                i = 0 | t._crypto_stream_chacha20_keybytes();
            a.length !== i && f(s, 'invalid key length'), (p = d(a)), s.push(p);
            var v = new u(0 | c),
                m = v.address;
            if (
                (s.push(m),
                0 === t._crypto_stream_chacha20_xor(m, n, c, 0, o, p))
            ) {
                var x = y(v, _);
                return g(s), x;
            }
            b(s, 'invalid usage');
        }

        function ht(e, r, a, _, s) {
            var n = [];
            l(s);
            var c = d((e = E(n, e, 'input_message'))),
                o = e.length;
            n.push(c), (r = E(n, r, 'nonce'));
            var h,
                p = 0 | t._crypto_stream_chacha20_noncebytes();
            r.length !== p && f(n, 'invalid nonce length'),
                (h = d(r)),
                n.push(h),
                m(n, a, 'nonce_increment'),
                ('number' != typeof a || (0 | a) !== a || a < 0) &&
                    f(n, 'nonce_increment must be an unsigned integer'),
                (_ = E(n, _, 'key'));
            var i,
                v = 0 | t._crypto_stream_chacha20_keybytes();
            _.length !== v && f(n, 'invalid key length'), (i = d(_)), n.push(i);
            var x = new u(0 | o),
                k = x.address;
            if (
                (n.push(k),
                0 === t._crypto_stream_chacha20_xor_ic(k, c, o, 0, h, a, 0, i))
            ) {
                var S = y(x, s);
                return g(n), S;
            }
            b(n, 'invalid usage');
        }

        function pt(e) {
            var r = [];
            l(e);
            var a = new u(0 | t._crypto_stream_keybytes()),
                _ = a.address;
            r.push(_), t._crypto_stream_keygen(_);
            var s = y(a, e);
            return g(r), s;
        }

        function yt(e) {
            var r = [];
            l(e);
            var a = new u(0 | t._crypto_stream_xchacha20_keybytes()),
                _ = a.address;
            r.push(_), t._crypto_stream_xchacha20_keygen(_);
            var s = y(a, e);
            return g(r), s;
        }

        function it(e, r, a, _) {
            var s = [];
            l(_);
            var n = d((e = E(s, e, 'input_message'))),
                c = e.length;
            s.push(n), (r = E(s, r, 'nonce'));
            var o,
                h = 0 | t._crypto_stream_xchacha20_noncebytes();
            r.length !== h && f(s, 'invalid nonce length'),
                (o = d(r)),
                s.push(o),
                (a = E(s, a, 'key'));
            var p,
                i = 0 | t._crypto_stream_xchacha20_keybytes();
            a.length !== i && f(s, 'invalid key length'), (p = d(a)), s.push(p);
            var v = new u(0 | c),
                m = v.address;
            if (
                (s.push(m),
                0 === t._crypto_stream_xchacha20_xor(m, n, c, 0, o, p))
            ) {
                var x = y(v, _);
                return g(s), x;
            }
            b(s, 'invalid usage');
        }

        function lt(e, r, a, _, s) {
            var n = [];
            l(s);
            var c = d((e = E(n, e, 'input_message'))),
                o = e.length;
            n.push(c), (r = E(n, r, 'nonce'));
            var h,
                p = 0 | t._crypto_stream_xchacha20_noncebytes();
            r.length !== p && f(n, 'invalid nonce length'),
                (h = d(r)),
                n.push(h),
                m(n, a, 'nonce_increment'),
                ('number' != typeof a || (0 | a) !== a || a < 0) &&
                    f(n, 'nonce_increment must be an unsigned integer'),
                (_ = E(n, _, 'key'));
            var i,
                v = 0 | t._crypto_stream_xchacha20_keybytes();
            _.length !== v && f(n, 'invalid key length'), (i = d(_)), n.push(i);
            var x = new u(0 | o),
                k = x.address;
            if (
                (n.push(k),
                0 === t._crypto_stream_xchacha20_xor_ic(k, c, o, 0, h, a, 0, i))
            ) {
                var S = y(x, s);
                return g(n), S;
            }
            b(n, 'invalid usage');
        }

        function ut(e, r) {
            var a = [];
            l(r),
                m(a, e, 'length'),
                ('number' != typeof e || (0 | e) !== e || e < 0) &&
                    f(a, 'length must be an unsigned integer');
            var _ = new u(0 | e),
                s = _.address;
            a.push(s), t._randombytes_buf(s, e);
            var n = y(_, r);
            return g(a), n;
        }

        function dt(e, r, a) {
            var _ = [];
            l(a),
                m(_, e, 'length'),
                ('number' != typeof e || (0 | e) !== e || e < 0) &&
                    f(_, 'length must be an unsigned integer'),
                (r = E(_, r, 'seed'));
            var s,
                n = 0 | t._randombytes_seedbytes();
            r.length !== n && f(_, 'invalid seed length'),
                (s = d(r)),
                _.push(s);
            var c = new u(0 | e),
                o = c.address;
            _.push(o), t._randombytes_buf_deterministic(o, e, s);
            var h = y(c, a);
            return g(_), h;
        }

        function vt(e) {
            l(e), t._randombytes_close();
        }

        function gt(e) {
            l(e);
            var r = t._randombytes_random() >>> 0;
            return g([]), r;
        }

        function bt(e, r) {
            var a = [];
            l(r);
            for (var _ = t._malloc(24), s = 0; s < 6; s++)
                t.setValue(
                    _ + 4 * s,
                    t.Runtime.addFunction(
                        e[
                            [
                                'implementation_name',
                                'random',
                                'stir',
                                'uniform',
                                'buf',
                                'close',
                            ][s]
                        ],
                    ),
                    'i32',
                );
            0 != (0 | t._randombytes_set_implementation(_)) &&
                b(a, 'unsupported implementation'),
                g(a);
        }

        function ft(e) {
            l(e), t._randombytes_stir();
        }

        function mt(e, r) {
            var a = [];
            l(r),
                m(a, e, 'upper_bound'),
                ('number' != typeof e || (0 | e) !== e || e < 0) &&
                    f(a, 'upper_bound must be an unsigned integer');
            var _ = t._randombytes_uniform(e) >>> 0;
            return g(a), _;
        }

        function Et() {
            var e = t._sodium_version_string(),
                r = t.UTF8ToString(e);
            return g([]), r;
        }
        return (
            (u.prototype.to_Uint8Array = function () {
                var e = new Uint8Array(this.length);
                return (
                    e.set(
                        t.HEAPU8.subarray(
                            this.address,
                            this.address + this.length,
                        ),
                    ),
                    e
                );
            }),
            (e.add = function (e, r) {
                if (!(e instanceof Uint8Array && r instanceof Uint8Array))
                    throw new TypeError('Only Uint8Array instances can added');
                var t = e.length,
                    a = 0,
                    _ = 0;
                if (r.length != e.length)
                    throw new TypeError('Arguments must have the same length');
                for (_ = 0; _ < t; _++)
                    (a >>= 8), (a += e[_] + r[_]), (e[_] = 255 & a);
            }),
            (e.base64_variants = o),
            (e.compare = function (e, r) {
                if (!(e instanceof Uint8Array && r instanceof Uint8Array))
                    throw new TypeError(
                        'Only Uint8Array instances can be compared',
                    );
                if (e.length !== r.length)
                    throw new TypeError(
                        'Only instances of identical length can be compared',
                    );
                for (var t = 0, a = 1, _ = e.length; _-- > 0; )
                    (t |= ((r[_] - e[_]) >> 8) & a),
                        (a &= ((r[_] ^ e[_]) - 1) >> 8);
                return t + t + a - 1;
            }),
            (e.from_base64 = function (e, r) {
                r = h(r);
                var a,
                    _ = [],
                    s = new u((3 * (e = E(_, e, 'input')).length) / 4),
                    n = d(e),
                    c = v(4),
                    o = v(4);
                return (
                    _.push(n),
                    _.push(s.address),
                    _.push(s.result_bin_len_p),
                    _.push(s.b64_end_p),
                    0 !==
                        t._sodium_base642bin(
                            s.address,
                            s.length,
                            n,
                            e.length,
                            0,
                            c,
                            o,
                            r,
                        ) && b(_, 'invalid input'),
                    t.getValue(o, 'i32') - n !== e.length &&
                        b(_, 'incomplete input'),
                    (s.length = t.getValue(c, 'i32')),
                    (a = s.to_Uint8Array()),
                    g(_),
                    a
                );
            }),
            (e.from_hex = function (e) {
                var r,
                    a = [],
                    _ = new u((e = E(a, e, 'input')).length / 2),
                    s = d(e),
                    n = v(4);
                return (
                    a.push(s),
                    a.push(_.address),
                    a.push(_.hex_end_p),
                    0 !==
                        t._sodium_hex2bin(
                            _.address,
                            _.length,
                            s,
                            e.length,
                            0,
                            0,
                            n,
                        ) && b(a, 'invalid input'),
                    t.getValue(n, 'i32') - s !== e.length &&
                        b(a, 'incomplete input'),
                    (r = _.to_Uint8Array()),
                    g(a),
                    r
                );
            }),
            (e.from_string = s),
            (e.increment = function (e) {
                if (!(e instanceof Uint8Array))
                    throw new TypeError(
                        'Only Uint8Array instances can be incremented',
                    );
                for (var r = 256, t = 0, a = e.length; t < a; t++)
                    (r >>= 8), (r += e[t]), (e[t] = 255 & r);
            }),
            (e.is_zero = function (e) {
                if (!(e instanceof Uint8Array))
                    throw new TypeError(
                        'Only Uint8Array instances can be checked',
                    );
                for (var r = 0, t = 0, a = e.length; t < a; t++) r |= e[t];
                return 0 === r;
            }),
            (e.libsodium = r),
            (e.memcmp = function (e, r) {
                if (!(e instanceof Uint8Array && r instanceof Uint8Array))
                    throw new TypeError(
                        'Only Uint8Array instances can be compared',
                    );
                if (e.length !== r.length)
                    throw new TypeError(
                        'Only instances of identical length can be compared',
                    );
                for (var t = 0, a = 0, _ = e.length; a < _; a++)
                    t |= e[a] ^ r[a];
                return 0 === t;
            }),
            (e.memzero = function (e) {
                if (!(e instanceof Uint8Array))
                    throw new TypeError(
                        'Only Uint8Array instances can be wiped',
                    );
                for (var r = 0, t = e.length; r < t; r++) e[r] = 0;
            }),
            (e.output_formats = function () {
                return ['uint8array', 'text', 'hex', 'base64'];
            }),
            (e.pad = function (e, r) {
                if (!(e instanceof Uint8Array))
                    throw new TypeError('buffer must be a Uint8Array');
                if ((r |= 0) <= 0) throw new Error('block size must be > 0');
                var a,
                    _ = [],
                    s = v(4),
                    n = 1,
                    c = 0,
                    o = 0 | e.length,
                    h = new u(o + r);
                _.push(s), _.push(h.address);
                for (var p = h.address, y = h.address + o + r; p < y; p++)
                    (t.HEAPU8[p] = e[c]),
                        (c += n =
                            1 &
                            ~(
                                ((65535 &
                                    (((o -= n) >>> 48) |
                                        (o >>> 32) |
                                        (o >>> 16) |
                                        o)) -
                                    1) >>
                                16
                            ));
                return (
                    0 !== t._sodium_pad(s, h.address, e.length, r, h.length) &&
                        b(_, 'internal error'),
                    (h.length = t.getValue(s, 'i32')),
                    (a = h.to_Uint8Array()),
                    g(_),
                    a
                );
            }),
            (e.unpad = function (e, r) {
                if (!(e instanceof Uint8Array))
                    throw new TypeError('buffer must be a Uint8Array');
                if ((r |= 0) <= 0) throw new Error('block size must be > 0');
                var a = [],
                    _ = d(e),
                    s = v(4);
                return (
                    a.push(_),
                    a.push(s),
                    0 !== t._sodium_unpad(s, _, e.length, r) &&
                        b(a, 'unsupported/invalid padding'),
                    (e = (e = new Uint8Array(e)).subarray(
                        0,
                        t.getValue(s, 'i32'),
                    )),
                    g(a),
                    e
                );
            }),
            (e.ready = _),
            (e.symbols = function () {
                return Object.keys(e).sort();
            }),
            (e.to_base64 = p),
            (e.to_hex = c),
            (e.to_string = n),
            e
        );
    }
    //This fix is needed to import libsodium-wrapper to JEST based unit tests. I think it is a bug since it is imposible to import libsodium-wrapper properly
    if (e === undefined) {
        e = {};
    }
    var t =
        'object' == typeof e.sodium && 'function' == typeof e.sodium.onload
            ? e.sodium.onload
            : null;
    'function' == typeof define && define.amd
        ? define(['exports', 'libsodium'], r)
        : 'object' == typeof exports && 'string' != typeof exports.nodeName
        ? r(exports, require('libsodium'))
        : (e.sodium = r((e.commonJsStrict = {}), e.libsodium)),
        t &&
            e.sodium.ready.then(function () {
                t(e.sodium);
            });
})(this);
