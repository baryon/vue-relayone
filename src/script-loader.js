import config from './config'

export default {
  promise: null,
  src: config.relayOneScript,

  load() {
    if ( !this.promise ) {
      this.promise = new Promise((resolve, reject) => {
        const el = document.createElement('script');
        el.type = 'text/javascript';
        el.async = true;
        el.src = this.src;

        el.addEventListener('load', _ => resolve(window.relayone));
        el.addEventListener('error', reject);
        el.addEventListener('abort', reject);
        document.head.appendChild(el);
      })
    }

    return this.promise;
  }
}
