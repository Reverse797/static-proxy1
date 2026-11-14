self.__uv$config = {
    prefix: '/uv/service/',
    bare: '/bare/', 
    wisp: 'https://carbon-bare-server.hubbard5306w.workers.dev',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/uv/uv.handler.js',
    bundle: '/uv/uv.bundle.js',
    config: '/uv/uv.config.js',
    sw: '/uv/uv.sw.js',
};
