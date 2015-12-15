import classNames from 'classnames';
import SidebarMixin from 'global/jsx/sidebar_component';

class HorizontalForm extends React.Component {
  render() {
    return (
      <Panel>
        <PanelHeader className='bg-darkblue fg-white'>
          <Grid>
            <Row>
              <Col xs={12}>
                <h3>Horizontal form</h3>
              </Col>
            </Row>
          </Grid>
        </PanelHeader>
        <PanelBody>
          <Grid>
            <Row>
              <Col xs={12}>
                <Form horizontal>
                  <FormGroup>
                    <Label control sm={3} htmlFor='blockhelp'>Block help</Label>
                    <Col sm={9}>
                      <Input type='text' id='blockhelp' placeholder='Enter text' />
                      <HelpBlock>A block of help text.</HelpBlock>
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Label control sm={3} htmlFor='inlinehelp'>Inline help</Label>
                    <Col sm={9}>
                      <Input type='text' id='inlinehelp' placeholder='Enter text' className='inline' />
                      <HelpBlock className='inline'>Inline help.</HelpBlock>
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Label control sm={3} htmlFor='inlineinputgroup'>Input group</Label>
                    <Col sm={9}>
                      <InputGroup>
                        <InputGroupAddon>
                          <Icon glyph='icon-fontello-user' />
                        </InputGroupAddon>
                        <Input type='email' id='inlineinputgroup' placeholder='Username' className='inline' />
                        <HelpBlock className='inline'>Inline help.</HelpBlock>
                      </InputGroup>
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Label control sm={3} htmlFor='inlineinputgroupmail'>Email address</Label>
                    <Col sm={9}>
                      <InputGroup>
                        <InputGroupAddon>
                          <Icon glyph='icon-fontello-mail' />
                        </InputGroupAddon>
                        <Input type='email' id='inlineinputgroupmail' placeholder='Email address' />
                      </InputGroup>
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Label control sm={3} htmlFor='horizontalpassword'>Password</Label>
                    <Col sm={9}>
                      <InputGroup>
                        <Input type='password' id='horizontalpassword' placeholder='Password' />
                        <InputGroupAddon>
                          <Icon glyph='icon-fontello-key' />
                        </InputGroupAddon>
                      </InputGroup>
                    </Col>
                  </FormGroup>
                  <FormGroup feedback>
                    <Label htmlFor='withicon' control sm={3}>With icon</Label>
                    <Col sm={9}>
                      <Input type='text' id='withicon' placeholder='Search' />
                      <Icon bundle='fontello' glyph='search' feedback/>
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor='searchbtnicon' control sm={3}>Input group with button</Label>
                    <Col sm={9}>
                      <InputGroup>
                        <Input type='text' id='searchbtnicon' placeholder='Enter keywords here ...' />
                        <InputGroupAddon className='plain'>
                          <Button>
                            <span>Search </span>
                            <Icon bundle='fontello' glyph='search' />
                          </Button>
                        </InputGroupAddon>
                      </InputGroup>
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Label control sm={3}>Email</Label>
                    <Col sm={9}>
                      <Static>support@sketchpixy.com</Static>
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Label control sm={3} htmlFor='disabledhorizontal'>Disabled</Label>
                    <Col sm={9}>
                      <Input id='disabledhorizontal' disabled type='text' placeholder='Disabled' />
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Label control sm={3} htmlFor='readonlyhorizontal'>Read only</Label>
                    <Col sm={9}>
                      <Input id='readonlyhorizontal' readOnly type='text' placeholder='Read only' />
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Label control sm={3} htmlFor='dropdownselecthorizontal'>Dropdown Select</Label>
                    <Col sm={9}>
                      <Select id='dropdownselecthorizontal' defaultValue='1'>
                        <option value='1'>Option 1</option>
                        <option value='2'>Option 2</option>
                        <option value='3'>Option 3</option>
                        <option value='4'>Option 4</option>
                        <option value='5'>Option 5</option>
                      </Select>
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Label control sm={3} htmlFor='multiselecthorizontal'>Multiple Select</Label>
                    <Col sm={9}>
                      <Select id='multiselecthorizontal' multiple>
                        <option value='1'>Option 1</option>
                        <option value='2'>Option 2</option>
                        <option value='3'>Option 3</option>
                        <option value='4'>Option 4</option>
                        <option value='5'>Option 5</option>
                      </Select>
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Label control sm={3} htmlFor='textareahorizontal'>Textarea</Label>
                    <Col sm={9}>
                      <Textarea id='textareahorizontal' rows='3' placeholder='Some text here...' />
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Label control sm={3} htmlFor='fileinputhorizontal'>File input</Label>
                    <Col sm={9}>
                      <Input id='fileinputhorizontal' type='file' />
                      <HelpBlock>some help text here.</HelpBlock>
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Label control sm={3}>Checkboxes</Label>
                    <Col sm={9}>
                      <Checkbox value='option1' name='horizontal-checkbox-options'>
                        Option one is great
                      </Checkbox>
                      <Checkbox value='option2' defaultChecked name='horizontal-checkbox-options'>
                        Option two is checked
                      </Checkbox>
                      <Checkbox value='option3' disabled name='horizontal-checkbox-options'>
                        Option three is disabled
                      </Checkbox>
                    </Col>
                    <hr/>
                  </FormGroup>
                  <FormGroup>
                    <Label control sm={3}>Inline checkboxes</Label>
                    <Col sm={9}>
                      <div>
                        <Checkbox inline value='option1' name='horizontal-inline-checkbox-options'>
                          Option 1
                        </Checkbox>
                        <Checkbox inline value='option2' defaultChecked name='horizontal-inline-checkbox-options'>
                          Option 2
                        </Checkbox>
                        <Checkbox inline value='option3' disabled name='horizontal-inline-checkbox-options'>
                          Disabled
                        </Checkbox>
                      </div>
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Label control sm={3}>Radios</Label>
                    <Col sm={9}>
                      <Radio value='option1' defaultChecked name='horizontal-radio-options'>
                        Option 1
                      </Radio>
                      <Radio value='option2' name='horizontal-radio-options'>
                        Option 2
                      </Radio>
                      <Radio value='option3' disabled name='horizontal-radio-options'>
                        Option disabled
                      </Radio>
                    </Col>
                    <hr/>
                  </FormGroup>
                  <FormGroup>
                    <Label control sm={3}>Inline radios</Label>
                    <Col sm={9}>
                      <div>
                        <Radio inline value='option1' name='horizontal-inline-radio-options'>
                          Option 1
                        </Radio>
                        <Radio inline value='option2' defaultChecked name='horizontal-inline-radio-options'>
                          Option 2
                        </Radio>
                        <Radio inline value='option3' disabled name='horizontal-inline-radio-options'>
                          Disabled
                        </Radio>
                      </div>
                    </Col>
                  </FormGroup>
                </Form>
              </Col>
            </Row>
          </Grid>
        </PanelBody>
        <PanelFooter className='bg-blue text-right'>
          <Grid>
            <Row>
              <Col xs={12}>
                <br/>
                <div>
                  <Button outlined bsStyle='lightblue'>cancel</Button>{' '}
                  <Button outlined bsStyle='lightblue'>submit</Button>
                </div>
                <br/>
              </Col>
            </Row>
          </Grid>
        </PanelFooter>
      </Panel>
    );
  }
}

export default class extends React.Component {
  render() {
    return (
      <HorizontalForm />
    );
  }
}