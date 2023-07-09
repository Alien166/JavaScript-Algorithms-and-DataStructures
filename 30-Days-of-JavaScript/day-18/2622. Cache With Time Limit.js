var TimeLimitedCache = function() {
    this.data = {};
    this.active = 0;
};

TimeLimitedCache.prototype.set = function(key, value, duration) {
    const prevActive = !!this.data[key]?.isActive;
    prevActive ? clearTimeout(this.data[key].timeoutId) : this.active++;
    const timeoutId = setTimeout(() => {
        this.active--;
        this.data[key].isActive = false;
    },duration);
    this.data[key] = {
        isActive: true,
        value,
        timeoutId
    }
    return prevActive;
};

TimeLimitedCache.prototype.get = function(key) {
    return this.data[key]?.isActive ? this.data[key].value : -1;
};

TimeLimitedCache.prototype.count = function() {
    return this.active;
};
