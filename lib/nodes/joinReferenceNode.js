var Node = require("./node");
Node.extend({

    instance: {

        constructor: function () {
            this._super(arguments);
            this.__fh = {};
            this.__lc = this.__rc = null;
            this.__variables = [];
            this.__varLength = 0;
        },

        setLeftContext: function (lc) {
            this.__lc = lc;
            var match = lc.match;
            var newFh = match.factHash, fh = this.__fh, prop, vars = this.__variables;
            for (var i = 0, l = this.__varLength; i < l; i++) {
                prop = vars[i];
                fh[prop] = newFh[prop];
            }
            return this;
        },

        setRightContext: function (rc) {
            this.__fh[this.__alias] = (this.__rc = rc).fact.object;
            return this;
        },

        clearContexts: function () {
            this.__fh = {};
            this.__lc = null;
            this.__rc = null;
            return this;
        },

        clearRightContext: function () {
            this.__rc = null;
            this.__fh[this.__alias] = null;
            return this;
        },

        clearLeftContext: function () {
            this.__lc = null;
            var fh = this.__fh = {}, rc = this.__rc;
            fh[this.__alias] = rc ? rc.fact.object : null;
            return this;
        },

        addConstraint: function (constraint) {
            if (!this.constraint) {
                this.constraint = constraint;
            } else {
                this.constraint = this.constraint.merge(constraint);
            }
            this.__alias = this.constraint.get("alias");
            this.__varLength = (this.__variables = this.__variables.concat(this.constraint.get("variables"))).length;
        },

        equal: function (constraint) {
            if (this.constraint) {
                return this.constraint.equal(constraint.constraint);
            }
        },

        isMatch: function () {
            var constraint = this.constraint;
            if (constraint) {
                return constraint.assert(this.__fh);
            }
            return true;
        },

        match: function () {
            var ret = {isMatch: false}, constraint = this.constraint;
            if (!constraint) {
                ret = this.__lc.match.merge(this.__rc.match);
            } else {
                var rightContext = this.__rc, fh = this.__fh;
                if (constraint.assert(fh)) {
                    ret = this.__lc.match.merge(rightContext.match);
                }
            }
            return ret;
        }

    }

}).as(module);