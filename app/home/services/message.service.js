export default class MessageService {

    constructor($http, $q, logger) {
        this.$http = $http;
        this.$q = $q;
        this.logger = logger;
    }

    findAll() {
        var deferred = this.$q.defer();

        this.$http.get('http://localhost:3000/messages')
            .success((data, status, headers, config) => {
                deferred.resolve(data);
            })
            .error((data, status)=> {
                this.logger.error('XHR Failed for MessageService#findAll.' + data);
                deferred.reject(data);
            });

        return deferred.promise;
    }

    find(id) {
        var deferred = this.$q.defer();

        this.$http.get(`http://localhost:3000/messages/${id}`)
            .success((data, status, headers, config)=> {
                deferred.resolve(data);
            })
            .error((data, status) => {
                this.logger.error('XHR Failed for MessageService#find.' + data);
                deferred.reject(data);
            });

        return deferred.promise;
    }
}

MessageService.$inject = ['$http', '$q', 'logger'];