import json
import os
from os.path import dirname
import sys
import traceback as tb

from flask import render_template, make_response, Blueprint, Flask

blueprint = Blueprint('WebBlargh', __name__)

app = Flask(__name__)
app.jinja_env.add_extension('pyjade.ext.jinja.PyJadeExtension')
app.debug = True
app.register_blueprint(blueprint)


@app.route('/')
def index():
    print 'here it is'
    try:
        import pdb; pdb.set_trace()
        return render_template('index.jade')
    except Exception:
        exctype, value, trace = sys.exc_info()
        data = {
            'type': exctype.__name__,
            'message': value.message,
            'trace': ''.join(tb.format_exception(exctype, value, trace))
        }
        response = make_response(json.dumps(data), 500)
        response.headers['content-type'] = 'application/json'
        return response

if __name__ == '__main__':
    app.run(port=3001)
